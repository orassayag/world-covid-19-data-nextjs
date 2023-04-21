import settings from '../../settings/settings';
import { StatisticUpdateModel, StatisticUpdateDataItemModel, StatisticsUpdatesSettingsListModel } from '../../core/models';
import { StatisticsUpdatesSortTypeEnum } from '../../core/enums';
import { logicUtils, timeUtils } from '../../utils';

class StatisticUpdateService {
  constructor() {
    this.maximumStatisticsItems = settings.MAXIMUM_STATISTICS_ITEMS;
  }

  initiateStatisticsUpdatesList() {
    return this.getStatisticsUpdatesList(null, {
      filterOptions: null,
      sortType: StatisticsUpdatesSortTypeEnum.LAST_UPDATE_TIME,
    });
  }

  initiateStatisticsUpdatesSettingsList() {
    return new StatisticsUpdatesSettingsListModel();
  }

  getStatisticsUpdatesList(statisticsUpdatesList, options) {
    if (!statisticsUpdatesList) {
      statisticsUpdatesList = [];
    }
    // Filter.
    statisticsUpdatesList = this.filter(statisticsUpdatesList, options);
    // Sort.
    statisticsUpdatesList = this.sort(statisticsUpdatesList, options);
    return statisticsUpdatesList;
  }

  filter(statisticsUpdatesList, options) {
    if (!options.filterOptions) {
      return statisticsUpdatesList;
    }
    if (options.filterOptions.fromDate && options.filterOptions.toDate) {
      statisticsUpdatesList = logicUtils.filterDates(statisticsUpdatesList, options.filterOptions);
      delete options.filterOptions.dateFieldName;
      delete options.filterOptions.toDate;
      delete options.filterOptions.fromDate;
    }
    return logicUtils.filter(statisticsUpdatesList, options.filterOptions);
  }

  sort(statisticsUpdatesList, options) {
    if (!options.sortType) {
      return statisticsUpdatesList;
    }
    return this[`${options.sortType}Sort`](statisticsUpdatesList);
  }

  lastUpdateTimeSort(statisticsUpdatesList) {
    return logicUtils.sort(statisticsUpdatesList, ['-lastUpdateDate']);
  }

  addStatisticsUpdate(statisticsUpdatesList, statisticUpdate) {
    if (statisticsUpdatesList.length >= this.maximumStatisticsItems) {
      statisticsUpdatesList = this.getStatisticsUpdatesList(statisticsUpdatesList, {
        filterOptions: null,
        sortType: StatisticsUpdatesSortTypeEnum.LAST_UPDATE_TIME,
      });
      statisticsUpdatesList = [
        statisticUpdate, ...statisticsUpdatesList.slice(0, this.maximumStatisticsItems - 1),
      ];
    } else {
      statisticsUpdatesList.push(statisticUpdate);
    }
    return statisticsUpdatesList;
  }

  updateStatisticsUpdatesListTimes(statisticsUpdatesList) {
    // Update the times.
    const dateNow = timeUtils.getCurrentDate();
    for (let i = 0; i < statisticsUpdatesList.length; i += 1) {
      statisticsUpdatesList[i] = this.updateTimes(statisticsUpdatesList[i], dateNow);
    }
    return statisticsUpdatesList;
  }

  updateStatisticsUpdatesList(data) {
    const { countriesList, countriesKeysList, statisticsUpdatesSettingsList } = data;
    let { lastStatisticsUpdateId } = statisticsUpdatesSettingsList;
    let { statisticsUpdatesList } = data;
    // Get new statistics updates.
    for (let i = 0; i < countriesKeysList.length; i += 1) {
      const countryId = countriesKeysList[i];
      const statisticUpdate = this.getStatisticsUpdate(
        countriesList[countryId],
        lastStatisticsUpdateId,
      );
      if (statisticUpdate) {
        statisticsUpdatesList = this.addStatisticsUpdate(statisticsUpdatesList, statisticUpdate);
        lastStatisticsUpdateId = statisticUpdate.id;
        lastStatisticsUpdateId += 1;
      }
    }
    statisticsUpdatesSettingsList.lastStatisticsUpdateId = lastStatisticsUpdateId;
    statisticsUpdatesList = this.updateStatisticsUpdatesListTimes(statisticsUpdatesList);
    return {
      statisticsUpdatesList,
      statisticsUpdatesSettingsList,
    };
  }

  updateTimes(statisticUpdate, dateNow) {
    const { differenceTimeDisplay } = timeUtils.getDifferenceTimesDisplay({
      startDateTime: statisticUpdate.lastUpdateDate,
      endDateTime: dateNow,
      maximumElementsCount: 2,
    });
    statisticUpdate.lastUpdateDateDisplay = timeUtils.getDisplayTextTime(differenceTimeDisplay);
    return statisticUpdate;
  }

  getStatisticsUpdate(country, lastStatisticsUpdateId) {
    if (!country.updateSourceData) {
      return null;
    }
    const {
      id, displayName, flagClassName, boxClassName, lastUpdateDate, lastUpdateSourceName,
    } = country;
    const [cases, deaths, recovers] = country.updateSourceData.dataItems;
    return new StatisticUpdateModel({
      id: lastStatisticsUpdateId,
      sourceName: lastUpdateSourceName,
      countryId: id,
      displayName,
      flagClassName,
      cases: new StatisticUpdateDataItemModel({
        type: cases.type,
        iconName: 'virus',
        updateType: cases.updateType,
        valuesPair: [cases.count, cases.countDisplay],
      }),
      deaths: new StatisticUpdateDataItemModel({
        type: deaths.type,
        iconName: 'skull-crossbones',
        updateType: deaths.updateType,
        valuesPair: [deaths.count, deaths.countDisplay],
      }),
      recovers: new StatisticUpdateDataItemModel({
        type: recovers.type,
        iconName: 'heart',
        updateType: recovers.updateType,
        valuesPair: [recovers.count, recovers.countDisplay],
      }),
      lastUpdateDate,
      updateClassName: boxClassName,
    });
  }

  cleanStatisticsUpdatesList(statisticsUpdatesList) {
    // Clear the previous updates.
    for (let i = 0; i < statisticsUpdatesList.length; i += 1) {
      const statisticUpdate = statisticsUpdatesList[i];
      if (statisticUpdate.updateClassName) {
        statisticUpdate.updateClassName = '';
        statisticsUpdatesList[i] = statisticUpdate;
      }
    }
    return statisticsUpdatesList;
  }

  getCountryStatisticsUpdates(data) {
    const { countryId, updatesHoursCount, statisticsUpdatesList } = data;
    const dateNow = timeUtils.getCurrentDate();
    return this.getStatisticsUpdatesList(statisticsUpdatesList, {
      filterOptions: {
        countryId: [countryId],
        dateFieldName: 'lastUpdateDate',
        fromDate: timeUtils.subtractHours(dateNow, updatesHoursCount),
        toDate: dateNow,
      },
      sortType: StatisticsUpdatesSortTypeEnum.LAST_UPDATE_TIME,
    });
  }

  updateStatisticsVisibility(data) {
    const { statisticsUpdatesList, countryId, isVisible } = data;
    for (let i = 0; i < statisticsUpdatesList.length; i += 1) {
      const statisticUpdateItem = statisticsUpdatesList[i];
      if (statisticUpdateItem.countryId === countryId) {
        statisticUpdateItem.isVisible = isVisible;
        statisticsUpdatesList[i] = statisticUpdateItem;
      }
    }
    return statisticsUpdatesList;
  }
}

export default new StatisticUpdateService();
