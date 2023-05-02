import settings from '../../settings/settings';
import {
  CountryActionNameEnum, CountriesActionTypeEnum, DataModeEnum, ModalNameEnum, SortDirectionEnum,
  UpdateCountryTypeEnum,
} from '../../core/enums';
import countryService from './country.service';
import settingService from './setting.service';
import sortService from './sort.service';
import sourceService from './source.service';
import statisticService from './statistic.service';
import statisticUpdateService from './statisticUpdate.service';
import { textUtils, timeUtils, validationUtils } from '../../utils';

class EngineService {
  constructor() {
    const { TRY_RECOVER_SOURCES_UPDATES_COUNT } = settings;
    // Sources.
    this.settingsList = null;
    this.loadingList = null;
    this.statisticsList = null;
    this.statisticsUpdatesList = null;
    this.statisticsUpdatesSettingsList = null;
    this.sourcesList = null;
    this.countriesList = null;
    this.countriesNameIdList = null;
    // Additional settings.
    this.singlesList = null;
    // Keys.
    this.sourcesKeysList = null;
    this.countriesKeysList = null;
    // State functions.
    this.onSetStateCurrentTime = null;
    this.onSetStateSettingsList = null;
    this.onSetStateStatisticsField = null;
    this.onSetStateStatisticsList = null;
    this.onSetStateStatisticsUpdatesSettingsList = null;
    this.onSetStateInitiateSettings = null;
    this.onSetStateInitiateSources = null;
    this.onSetStateUpdateRound = null;
    this.onSetStateDataCollection = null;
    this.onSetStateActionUpdate = null;
    this.onSetStateActionRefresh = null;
    this.onSetStateUpdateCountryVisibility = null;
    // SetTimeOut interval.
    this.sourcesIndex = 0;
    this.sourcesRefreshIndex = 0;
    this.liveStandardDelayTime = 0;
    this.localStandardDelayTime = 0;
    this.localDelayTimeAfterFinishLoading = 0;
    this.refreshDelayTime = 0;
    this.timer = null;
    // Clock interval.
    this.clock = null;
    // Loader interval.
    this.loader = null;
    // Local flags.
    this.mode = DataModeEnum.LOCAL;
    this.isInitiateComplete = false;
    // Sources list recover.
    this.recoverUpdatesCount = TRY_RECOVER_SOURCES_UPDATES_COUNT;
    this.tryRecoverRounds = 0;
    this.tryRecoverLeft = this.recoverUpdatesCount;
    // Previous object.
    // In order to save a previous collection as state was before changes.
    this.previousObject = null;
  }

  initiateParameters(mode, interval) {
    // Mode.
    if (mode === DataModeEnum.LOCAL) {
      this.mode = DataModeEnum.LOCAL;
    }
    this.settingsList.isLiveMode = this.mode === DataModeEnum.LIVE;
    // Interval.
    if (interval) {
      let int = +interval;
      if (isNaN(int) || int < settings.LOCAL_DELAY_BETWEEN_SOURCES_FETCH || int > 99) {
        int = settings.LOCAL_DELAY_BETWEEN_SOURCES_FETCH;
      }
      // Local delay time after finish loading.
      this.settingsList.intervalSeconds = int;
      this.localDelayTimeAfterFinishLoading = int * 1000;
    }
  }

  initiateSources({
    mode, interval, onSetStateCurrentTime, onSetStateSettingsList, onSetStateStatisticsField,
    onSetStateStatisticsList, onSetStateStatisticsUpdatesSettingsList, onSetStateInitiateSettings,
    onSetStateInitiateSources, onSetStateUpdateRound, onSetStateDataCollection,
    onSetStateActionUpdate, onSetStateActionRefresh, onSetStateUpdateCountryVisibility,
  }) {
    this.settingsList = settingService.initiateSettingsList();
    this.initiateParameters(mode, interval);
    this.loadingList = settingService.initiateStateLoadingList();
    this.singlesList = statisticService.initiateSinglesList();
    this.statisticsList = statisticService.initiateStatisticsList();
    this.statisticsUpdatesList = statisticUpdateService.initiateStatisticsUpdatesList();
    this.statisticsUpdatesSettingsList = statisticUpdateService
      .initiateStatisticsUpdatesSettingsList();
    this.sourcesList = sourceService.initiateSourcesList();
    const { countriesList, countriesNameIdList } = countryService.initiateCountriesList();
    this.countriesList = countriesList;
    this.countriesNameIdList = countriesNameIdList;
    this.sourcesKeysList = sourceService.sourcesKeysList;
    this.countriesKeysList = countryService.countriesKeysList;
    this.onSetStateCurrentTime = onSetStateCurrentTime;
    this.onSetStateSettingsList = onSetStateSettingsList;
    this.onSetStateStatisticsField = onSetStateStatisticsField;
    this.onSetStateStatisticsList = onSetStateStatisticsList;
    this.onSetStateStatisticsUpdatesSettingsList = onSetStateStatisticsUpdatesSettingsList;
    this.onSetStateInitiateSettings = onSetStateInitiateSettings;
    this.onSetStateInitiateSources = onSetStateInitiateSources;
    this.onSetStateUpdateRound = onSetStateUpdateRound;
    this.onSetStateDataCollection = onSetStateDataCollection;
    this.onSetStateActionUpdate = onSetStateActionUpdate;
    this.onSetStateActionRefresh = onSetStateActionRefresh;
    this.onSetStateUpdateCountryVisibility = onSetStateUpdateCountryVisibility;
    // Set first time settings state.
    this.onSetStateInitiateSettings({
      settingsList: this.settingsList,
      loadingList: this.loadingList,
    });
  }

  updateLocalSettingsList(settingsList) {
    this.settingsList = {
      ...this.settingsList,
      ...settingsList,
    };
  }

  updateLocalStatisticsList(statisticsList) {
    this.statisticsList = {
      ...this.statisticsList,
      ...statisticsList,
    };
  }

  updateLocalStatisticsUpdatesList(updateStatisticsUpdatesListResults) {
    const {
      statisticsUpdatesList,
      statisticsUpdatesSettingsList,
    } = updateStatisticsUpdatesListResults;
    if (validationUtils.isExists(statisticsUpdatesList)) {
      this.statisticsUpdatesList = [...statisticsUpdatesList];
    }
    this.statisticsUpdatesSettingsList = {
      ...this.statisticsUpdatesSettingsList,
      ...statisticsUpdatesSettingsList,
    };
  }

  updateSettingsListField(listName, listValues) {
    this[listName] = {
      ...this[listName],
      ...listValues,
    };
    this.onSetStateSettingsList(listName, this[listName]);
  }

  updateSinglesListField(fieldName, fieldValue) {
    this.singlesList[fieldName] = fieldValue;
    this.onSetStateStatisticsField(fieldName, fieldValue);
  }

  updateStatisticsListField(fieldName, fieldValue) {
    this.statisticsList[fieldName] = fieldValue;
    this.onSetStateStatisticsList({ [fieldName]: fieldValue });
  }

  updateDataCollection(collectionName, collectionValue) {
    this[collectionName] = collectionValue;
    this.onSetStateDataCollection(collectionName, collectionValue);
  }

  runClock() {
    this.clock = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  runEngine(data) {
    this.initiateSources(data);
    this.runClock();
    this.runDataInterval();
  }

  updateClock() {
    const dateNow = timeUtils.getCurrentDate();
    this.singlesList.currentTime = dateNow;
    const lastUpdateResult = timeUtils.getDifferenceTimesDisplay({
      startDateTime: this.statisticsList.lastUpdateDate,
      endDateTime: dateNow,
      maximumElementsCount: 2,
    });
    this.singlesList.lastUpdateDateDisplay = lastUpdateResult
      ? lastUpdateResult.differenceTimeDisplay : null;
    this.onSetStateCurrentTime({
      currentTime: this.singlesList.currentTime,
      lastUpdateDateDisplay: this.singlesList.lastUpdateDateDisplay,
    });
  }

  setUpdatesLoader(isUpdateLoaderDisplay) {
    if (!this.isInitiateComplete || this.settingsList.isRefreshMode) {
      return;
    }
    this.updateSinglesListField('isUpdateLoaderDisplay', isUpdateLoaderDisplay);
  }

  setSourceError(sourceName, isError) {
    const { sourcesList } = this;
    sourcesList[sourceName].isError = isError;
    this.updateDataCollection('sourcesList', sourcesList);
  }

  validateFetchDataResults(fetchDataResults) {
    const { source, error, resultData } = fetchDataResults;
    const { lowerName, isError } = source;
    if (error || !resultData || resultData.length <= 0) {
      this.setSourceError(lowerName, true);
      return false;
    }
    if (isError) {
      this.setSourceError(lowerName, false);
    }
    return true;
  }

  updateCountries(countriesActionType, fetchDataResults) {
    return countryService.updateCountries({
      countriesActionType,
      countriesList: this.countriesList,
      fetchDataResults,
      settingsList: this.settingsList,
      countriesKeysList: this.countriesKeysList,
      sourcesList: this.sourcesList,
      sourcesKeysList: this.sourcesKeysList,
    });
  }

  updateInactiveData() {
    const indexResult = this.getSourceAndIndex(false);
    this.countriesList = this.updateCountries(CountriesActionTypeEnum.INACTIVE, null);
    const updatedStatisticsList = {
      nextUpdateSourceName: indexResult.source.upperName,
    };
    // Update the statistics updates times.
    this.statisticsUpdatesList = statisticUpdateService
      .updateStatisticsUpdatesListTimes(this.statisticsUpdatesList);
    this.onSetStateUpdateRound({
      countriesList: this.countriesList,
      statisticsList: updatedStatisticsList,
      updateStatisticsUpdatesListResults: {
        statisticsUpdatesList: this.statisticsUpdatesList,
      },
    });
    this.updateLocalStatisticsList(updatedStatisticsList);
  }

  runDataInterval() {
    const transition = async () => {
      const { isActive } = this.settingsList;
      if (!isActive && !this.settingsList.isRefreshMode) {
        if (this.isInitiateComplete) {
          this.updateInactiveData();
        }
        this.nextInterval(transition);
        return;
      }
      // Current source.
      const source = this.getSource(this.sourcesIndex);
      if (this.isInitiateComplete && !this.settingsList.isRefreshMode) {
        // Cleanup the previous countries updates.
        this.countriesList = this.updateCountries(CountriesActionTypeEnum.CLEANUP, null);
        // Cleanup the previous statistics updates.
        this.statisticsUpdatesList = statisticUpdateService
          .cleanStatisticsUpdatesList(this.statisticsUpdatesList);
      }
      // Fetch the data.
      this.setUpdatesLoader(true);
      const fetchDataResults = await countryService.getCountryData({
        source,
        settingsList: this.settingsList,
        countriesList: this.countriesList,
        countriesKeysList: this.countriesKeysList,
        isInitiateComplete: this.isInitiateComplete,
      });
      // Validate the results.
      if (!this.validateFetchDataResults(fetchDataResults)) {
        this.nextInterval(transition);
        return;
      }
      this.setUpdatesLoader(false);
      if (this.isInitiateComplete && !this.settingsList.isRefreshMode) {
        // Update new countries data.
        this.countriesList = this.updateCountries(CountriesActionTypeEnum.UPDATE, fetchDataResults);
        // Update new statistics updates data.
        const updateStatisticsUpdatesListResults = statisticUpdateService
          .updateStatisticsUpdatesList({
            statisticsUpdatesList: this.statisticsUpdatesList,
            statisticsUpdatesSettingsList: this.statisticsUpdatesSettingsList,
            countriesList: this.countriesList,
            countriesKeysList: this.countriesKeysList,
          });
        // Update round data state.
        const indexResult = this.getSourceAndIndex(false);
        const updatedStatisticsList = {
          lastUpdateDate: timeUtils.getCurrentDate(),
          lastUpdateSourceName: source.upperName,
          nextUpdateSourceName: indexResult.source.upperName,
          isLastUpdateChanges: fetchDataResults.updateCountryType === UpdateCountryTypeEnum.DATA,
          totalUpdatesCount: this.statisticsList.totalUpdatesCount + 1,
          totalUpdateCyclesCount: this.sourcesIndex === 0
            && this.statisticsList.totalUpdatesCount > 1
            ? this.statisticsList.totalUpdateCyclesCount + 1
            : this.statisticsList.totalUpdateCyclesCount,
        };
        this.onSetStateUpdateRound({
          countriesList: this.countriesList,
          statisticsList: updatedStatisticsList,
          updateStatisticsUpdatesListResults,
        });
        this.updateLocalStatisticsList(updatedStatisticsList);
        this.updateLocalStatisticsUpdatesList(updateStatisticsUpdatesListResults);
      }
      if (this.isContinueToNextRound()) {
        // Continue to the next round.
        this.nextInterval(transition);
      }
    };
    setTimeout(transition, this.getDelayTime());
  }

  isContinueToNextRound() {
    if (!this.settingsList.isRefreshMode) {
      return true;
    }
    const refreshSource = this.getSource(this.sourcesRefreshIndex);
    if (refreshSource) {
      this.updateSettingsListField('loadingList', {
        refreshSourceName: refreshSource.upperName,
      });
    }
    if (refreshSource && !this.sourcesRefreshIndex < this.sourcesKeysList.length) {
      this.sourcesRefreshIndex += 1;
    } else {
      this.finalizeRefreshData();
    }
    return true;
  }

  nextInterval(transition) {
    this.clearTimer();
    this.checkPoint();
    this.timer = setTimeout(transition, this.getDelayTime());
  }

  removeLoader(currentPercentage) {
    // Remove the loader from the DOM.
    if (currentPercentage === 100) {
      setTimeout(() => {
        this.updateSettingsListField('loadingList', {
          isScreenLoaderComplete: true,
        });
      }, 5000);
    }
  }

  checkPoint() {
    // Set the loader percentage for the first load.
    if (!this.isInitiateComplete && !this.settingsList.isRefreshMode) {
      const currentPercentage = textUtils
        .getAbsolutePercentage(this.sourcesIndex + 1, this.sourcesKeysList.length);
      const { apiURL, upperName, officialName } = this.getSource(this.sourcesIndex);
      this.updateSettingsListField('loadingList', {
        loadingPercentage: currentPercentage,
        loadingSourceName: upperName,
        loadingSourceOfficialName: officialName,
        loadingSourceURL: apiURL,
      });
      this.removeLoader(currentPercentage);
    }
    const indexResult = this.getSourceAndIndex(true);
    this.sourcesIndex = indexResult.updatedIndex;
  }

  getSource(index) {
    return this.sourcesList[this.sourcesKeysList[index]];
  }

  getDelayTime() {
    if (this.settingsList.isRefreshMode) {
      return this.refreshDelayTime;
    }
    if (this.settingsList.isLiveMode) {
      return this.liveStandardDelayTime;
    }
    return this.loadingList.isScreenLoaderComplete
      ? this.localDelayTimeAfterFinishLoading : this.localStandardDelayTime;
  }

  checkRecoverMode() {
    const { totalUpdatesCount } = this.statisticsList;
    if (!this.isInitiateComplete || this.settingsList.isRefreshMode || totalUpdatesCount === 0) {
      return;
    }
    if (this.tryRecoverRounds === 0) {
      if (this.tryRecoverLeft > 0) {
        this.tryRecoverLeft = -1;
      } else {
        this.updateSettingsListField('settingsList', { isRecoverMode: true });
        this.tryRecoverRounds = this.sourcesKeysList.length;
      }
    } else {
      this.tryRecoverRounds = -1;
      if (this.tryRecoverRounds === 0) {
        this.updateSettingsListField('settingsList', { isRecoverMode: false });
        this.tryRecoverLeft = this.recoverUpdatesCount;
      }
    }
  }

  updateIndex(index) {
    index += 1;
    if (index >= this.sourcesKeysList.length) {
      index = 0;
    }
    return index;
  }

  getSourceAndIndex(isRoundProcess) {
    let updatedIndex = this.sourcesIndex;
    updatedIndex = this.updateIndex(updatedIndex);
    if (!this.isInitiateComplete && !this.settingsList.isRefreshMode && updatedIndex === 0) {
      this.finalizeStandardData();
    }
    if (isRoundProcess && this.mode === DataModeEnum.LIVE) {
      this.checkRecoverMode();
    }
    let source = this.getSource(updatedIndex);
    while (!this.isValidFetchDataSource(source)) {
      updatedIndex = this.updateIndex(updatedIndex);
      source = this.getSource(updatedIndex);
    }
    return {
      updatedIndex,
      source,
    };
  }

  isValidFetchDataSource(source) {
    if (!source || !source.isActive) {
      return false;
    }
    if (source.isError
      && (this.isInitiateComplete
        && !this.settingsList.isRefreshMode && this.tryRecoverRounds === 0)) {
      return false;
    }
    return true;
  }

  finalizeStandardData() {
    this.isInitiateComplete = true;
    this.liveStandardDelayTime = settings.LIVE_DELAY_BETWEEN_SOURCES_FETCH;
    this.localStandardDelayTime = settings.LOCAL_DELAY_BETWEEN_SOURCES_FETCH * 1000;
    // Random a leading source if not exists.
    if (!this.settingsList.leadingSource) {
      this.settingsList.leadingSource = sourceService.getRandomSource(this.sourcesList);
    }
    // Set sort fields list.
    const { updatedSortType } = this.setSortValues(this.settingsList.sortType.sortTypeName, null);
    this.settingsList.sortType = updatedSortType;
    // Last round to first time fetch data.
    this.countriesList = this.updateCountries(CountriesActionTypeEnum.FINALIZE, null);
    // Update the countries count displayed in the master box.
    const updatedStatisticsList = {
      totalVisibleCountriesCount: this.countriesNameIdList.length,
    };
    this.updateLocalStatisticsList(updatedStatisticsList);
    // Set the sources and the countries for the first time.
    this.onSetStateInitiateSources({
      sourcesList: this.sourcesList,
      countriesList: this.countriesList,
      countriesNameIdList: this.countriesNameIdList,
      statisticsList: this.statisticsList,
      settingsList: this.settingsList,
    });
  }

  finalizeRefreshData() {
    // Clear refresh source name.
    this.updateSettingsListField('loadingList', {
      refreshSourceName: null,
    });
    // Last round in refresh mode fetch data.
    this.countriesList = this.updateCountries(CountriesActionTypeEnum.UPDATE, null);
    // Update new statistics updates data.
    const updateStatisticsUpdatesListResults = statisticUpdateService.updateStatisticsUpdatesList({
      statisticsUpdatesList: this.statisticsUpdatesList,
      statisticsUpdatesSettingsList: this.statisticsUpdatesSettingsList,
      countriesList: this.countriesList,
      countriesKeysList: this.countriesKeysList,
    });
    // Set the countries, the settings and the statistics in refresh mode.
    this.updateLocalSettingsList({
      isActive: this.previousObject.isActive,
      isRefreshMode: false,
    });
    this.previousObject = null;
    const refreshSource = this.getSource(this.sourcesRefreshIndex);
    this.sourcesRefreshIndex = 0;
    this.updateLocalStatisticsList({
      lastUpdateDate: timeUtils.getCurrentDate(),
      lastUpdateSourceName: refreshSource
        ? refreshSource.upperName : this.statisticsList.lastUpdateSourceName,
      totalUpdatesCount: this.statisticsList.totalUpdatesCount + this.sourcesKeysList.length,
      totalUpdateCyclesCount: this.statisticsList.totalUpdateCyclesCount + 1,
    });
    this.onSetStateActionRefresh({
      countriesList: this.countriesList,
      settingsList: this.settingsList,
      statisticsList: this.statisticsList,
      updateStatisticsUpdatesListResults,
    });
  }

  clearClock() {
    if (this.clock) {
      clearInterval(this.clock);
      this.clock = null;
    }
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  clearSources() {
    this.clearClock();
    this.clearTimer();
  }

  updateActionLoader(value) {
    const { isRefreshMode, isActionLoader } = this.settingsList;
    if (!isRefreshMode && isActionLoader !== value) {
      this.updateSettingsListField('settingsList', { isActionLoader: value });
    }
  }

  setSortFieldsList(data) {
    const { forceSortDirection } = data;
    let { sortType } = data;
    sortType = { ...sortType };
    let symbol = null;
    switch (forceSortDirection) {
      case SortDirectionEnum.DESCENDING: { symbol = '-'; break; }
      case SortDirectionEnum.ASCENDING: { symbol = ''; break; }
      default: { symbol = sortType.directionSymbol; break; }
    }
    const fieldsList = [...sortType.fieldsList];
    fieldsList[0] = textUtils.insertAtIndex(fieldsList[0], 0, symbol);
    sortType.fieldsList = fieldsList;
    return sortType;
  }

  setSortValues(sortTypeName, forceSortDirection) {
    const updatedSortType = this.setSortFieldsList({
      sortType: sortService.sortsList[sortTypeName],
      forceSortDirection,
    });
    return {
      updatedSortType,
      updatedAdditionalSettings: { forceSortDirection },
    };
  }

  updateCountryVisibility(countryId, isVisible) {
    // Update the country in the countries list.
    this.countriesList = countryService.updateCountryField({
      countriesList: this.countriesList,
      settingsList: this.settingsList,
      countryId,
      fieldName: 'isVisible',
      fieldValue: isVisible,
      isRefreshList: false,
    });
    // Update the countries names (for statistics modal).
    this.countriesNameIdList = countryService.updateCountriesNameIdList(this.countriesList);
    // Update all update statistics items.
    if (validationUtils.isExists(this.statisticsUpdatesList)) {
      this.statisticsUpdatesList = statisticUpdateService.updateStatisticsVisibility({
        statisticsUpdatesList: this.statisticsUpdatesList,
        countryId,
        isVisible,
      });
    }
    // Update the number of the countries on the master box.
    const updatedStatisticsList = {
      totalVisibleCountriesCount: this.countriesNameIdList.length,
    };
    this.updateLocalStatisticsList(updatedStatisticsList);
    // Update the state.
    this.onSetStateUpdateCountryVisibility({
      countriesList: this.countriesList,
      countriesNameIdList: this.countriesNameIdList,
      statisticsList: updatedStatisticsList,
      statisticsUpdatesList: this.statisticsUpdatesList,
    });
  }

  runMasterActionClick(data) {
    // ToDo: Convert the action into an enum.
    const { action, value, id } = data;
    if (!action || (!value && action !== 'modal')) {
      return;
    }
    let fieldName = null;
    let fieldValue = value;
    let isChangeSettingsOnly = true;
    let isActionLoader; let
      isNoActionNeeded = false;
    let additionalSettings = {};
    switch (action) {
      case 'modal': {
        if (value === 'remove') {
          this.updateCountryVisibility(parseInt(id, 10), false);
          isNoActionNeeded = true;
          break;
        } else {
          fieldName = 'activeModalName';
          if (this.settingsList.activeModalName) {
            fieldValue = null;
          }
          if (fieldValue === ModalNameEnum.COUNTRY) {
            additionalSettings = {
              activeModalValue: id,
              isReplaceModalMode: false,
            };
          }
        }
        break;
      }
      case 'replace-modal': {
        fieldName = 'activeModalName';
        if (fieldValue === ModalNameEnum.COUNTRY) {
          additionalSettings = {
            activeModalValue: id,
            isReplaceModalMode: true,
          };
        }
        break;
      }
      case 'active': { fieldName = 'isActive'; fieldValue = !this.settingsList.isActive; break; }
      case 'refresh': {
        if (this.settingsList.isRefreshMode) {
          return;
        }
        isActionLoader = true;
        fieldName = 'isRefreshMode';
        fieldValue = true;
        additionalSettings = {
          isActive: false,
        };
        this.previousObject = { ...this.settingsList };
        break;
      }
      case 'local': { fieldName = 'isLiveMode'; fieldValue = false; break; }
      case 'live': { fieldName = 'isLiveMode'; fieldValue = true; break; }
      case 'view': { fieldName = 'viewType'; break; }
      case 'color': { fieldName = 'colorType'; break; }
      case 'sort': {
        if (this.settingsList.sortType.sortTypeName === fieldValue) {
          return;
        }
        fieldName = 'sortType';
        isChangeSettingsOnly = false;
        isActionLoader = true;
        const { updatedSortType, updatedAdditionalSettings } = this.setSortValues(fieldValue, null);
        fieldValue = updatedSortType;
        additionalSettings = updatedAdditionalSettings;
        break;
      }
      case 'direction': {
        const { forceSortDirection } = this.settingsList;
        if (forceSortDirection === fieldValue) {
          return;
        }
        fieldName = 'sortType';
        isChangeSettingsOnly = false;
        isActionLoader = true;
        const {
          updatedSortType,
          updatedAdditionalSettings,
        } = this.setSortValues(this.settingsList.sortType.sortTypeName, fieldValue);
        fieldValue = updatedSortType;
        additionalSettings = updatedAdditionalSettings;
        break;
      }
    }
    const updatedSettingsList = {
      [fieldName]: fieldValue,
      ...additionalSettings,
    };
    if (isActionLoader) {
      this.updateActionLoader(true);
    }
    if (isNoActionNeeded) {
      return;
    }
    setTimeout(() => { // For the master loader effect.
      if (isChangeSettingsOnly) {
        // Update the settings only.
        this.updateSettingsListField('settingsList', updatedSettingsList);
        // Refresh or change mode only action.
        if (action === 'refresh') {
          this.runDataInterval();
        }
      } else {
        this.updateLocalSettingsList(updatedSettingsList);
        // Update the data according to the settings update.
        this.countriesList = this.updateCountries(CountriesActionTypeEnum.REFRESH, null);
        this.onSetStateActionUpdate({
          countriesList: this.countriesList,
          settingsList: this.settingsList,
        });
      }
    }, 0);
  }

  runModalActionUpdate(data) {
    this[`run${data.modalName}ActionUpdate`](data);
  }

  runCountryActionUpdate(data) {
    const { action, value, countryId } = data;
    if (!action || !value || !countryId) {
      return;
    }
    switch (action) {
      case CountryActionNameEnum.SELECT_TIME: {
        this.updateCountrySpecificField({
          countryId,
          fieldName: 'updatesHoursCount',
          fieldValue: parseInt(value, 10),
          isRefreshList: false,
        });
        break;
      }
    }
  }

  updateCountrySpecificField(data) {
    const {
      countryId, fieldName, fieldValue, isRefreshList,
    } = data;
    this.countriesList = countryService.updateCountryField({
      countriesList: this.countriesList,
      settingsList: this.settingsList,
      countryId,
      fieldName,
      fieldValue,
      isRefreshList,
    });
    this.onSetStateActionUpdate({
      countriesList: this.countriesList,
      settingsList: this.settingsList,
    });
  }

  runGlobalStatisticsActionUpdate(data) {
    const { action, value } = data;
    if (!action || !value) {
      return;
    }
    switch (action) {
      case CountryActionNameEnum.SELECT_TIME: {
        const updatedStatisticsUpdatesSettingsList = {
          statisticsUpdatesHoursCount: value,
        };
        this.updateLocalStatisticsUpdatesList({
          statisticsUpdatesList: null,
          statisticsUpdatesSettingsList: updatedStatisticsUpdatesSettingsList,
        });
        this.onSetStateStatisticsUpdatesSettingsList(updatedStatisticsUpdatesSettingsList);
        break;
      }
      case CountryActionNameEnum.SELECT_COUNTRY: {
        const updatedStatisticsUpdatesSettingsList = {
          statisticsUpdatesCountryId: parseInt(value, 10),
        };
        this.updateLocalStatisticsUpdatesList({
          statisticsUpdatesList: null,
          statisticsUpdatesSettingsList: updatedStatisticsUpdatesSettingsList,
        });
        this.onSetStateStatisticsUpdatesSettingsList(updatedStatisticsUpdatesSettingsList);
        break;
      }
    }
  }

  getCountryData(data) {
    const { id, countriesList, statisticsUpdatesList } = data;
    const country = countryService.getCountryById(id, countriesList);
    const updatesList = statisticUpdateService.getCountryStatisticsUpdates({
      countryId: country.id,
      updatesHoursCount: country.updatesHoursCount,
      statisticsUpdatesList,
    });
    return {
      country,
      updatesList,
    };
  }

  getCountryIdentityDetailsList(data) {
    return countryService.getCountryIdentityDetailsList(data);
  }
}

export default new EngineService();
