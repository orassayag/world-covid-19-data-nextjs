import StatisticsExitButton from '../StatisticsExitButton/StatisticsExitButton';
import StatisticsOkButton from '../StatisticsOkButton/StatisticsOkButton';
import StatisticsSummary from '../StatisticsSummary/StatisticsSummary';
import StatisticsUpdates from '../StatisticsUpdates/StatisticsUpdates';

export default function StatisticsModal({
  styles, countriesNameIdList, statisticsUpdatesList, statisticsUpdatesHoursCount,
  statisticsUpdatesCountryId, onActionClick, onActionChange,
}) {
  return (
    <div className={`${styles.modal_content} ${styles.statistics} f16 f16-extra`}>
      <div className={styles.content}>
        <StatisticsExitButton
          styles={styles}
          onActionClick={onActionClick}
        />
        <StatisticsUpdates
          countriesNameIdList={countriesNameIdList}
          statisticsUpdatesList={statisticsUpdatesList}
          statisticsUpdatesHoursCount={statisticsUpdatesHoursCount}
          statisticsUpdatesCountryId={statisticsUpdatesCountryId}
          onActionClick={onActionClick}
          onActionChange={onActionChange}
        />
        <StatisticsSummary />
        <StatisticsOkButton
          onActionClick={onActionClick}
        />
      </div>
    </div>
  );
}
