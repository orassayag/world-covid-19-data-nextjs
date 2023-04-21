import styles from './StatisticsUpdates.module.scss';
import StatisticsActionsPanel from '../StatisticsActionsPanel/StatisticsActionsPanel';
import StatisticsUpdatesData from '../StatisticsUpdatesData/StatisticsUpdatesData';
import { StatisticsUpdatesSortTypeEnum } from '../../../../core/enums';
import { timeUtils } from '../../../../utils';
import { statisticUpdateService } from '../../../../services';

export default function StatisticsUpdates({
  countriesNameIdList, statisticsUpdatesList, statisticsUpdatesHoursCount,
  statisticsUpdatesCountryId, onActionClick, onActionChange,
}) {
  const dateNow = timeUtils.getCurrentDate();
  const countryIdQuery = statisticsUpdatesCountryId === -1
    ? {} : { countryId: [statisticsUpdatesCountryId] };
  const displayStatisticsUpdatesList = statisticUpdateService
    .getStatisticsUpdatesList(statisticsUpdatesList, {
      filterOptions: {
        ...countryIdQuery,
        isVisible: [true],
        dateFieldName: 'lastUpdateDate',
        fromDate: timeUtils.subtractHours(dateNow, statisticsUpdatesHoursCount),
        toDate: dateNow,
      },
      sortType: StatisticsUpdatesSortTypeEnum.LAST_UPDATE_TIME,
    });

  return (
    <div className={styles.updates}>
      <div className={styles.latest_updates}>
        <div className={styles.title}>
          Latest Updates
        </div>
        <StatisticsActionsPanel
          countriesNameIdList={countriesNameIdList}
          statisticsUpdatesHoursCount={statisticsUpdatesHoursCount}
          statisticsUpdatesCountryId={statisticsUpdatesCountryId}
          onActionChange={onActionChange}
        />
      </div>
      <StatisticsUpdatesData
        statisticsUpdatesList={displayStatisticsUpdatesList}
        onActionClick={onActionClick}
      />
    </div>
  );
}
