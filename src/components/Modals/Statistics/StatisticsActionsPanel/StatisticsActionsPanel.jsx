import styles from './StatisticsActionsPanel.module.scss';
import HoursSelect from '../../../Common/HoursSelect/HoursSelect';

export default function StatisticsActionsPanel({
  countriesNameIdList, statisticsUpdatesHoursCount, statisticsUpdatesCountryId, onActionChange,
}) {
  const countriesListDOM = [];
  for (let i = 0; i < countriesNameIdList.length; i += 1) {
    const { id, displayName } = countriesNameIdList[i];
    countriesListDOM.push(
      (<option key={id} value={id}>{displayName}</option>),
    );
  }

  return (
    <div className={styles.actions_panel}>
      <div className={styles.time_selector}>
        <HoursSelect
          dataModelName="GlobalStatistics"
          value={statisticsUpdatesHoursCount}
          onActionChange={onActionChange}
        />
      </div>
      <div className={styles.country_selector}>
        <select data-action="select-country" data-modal-name="GlobalStatistics" value={statisticsUpdatesCountryId} onChange={onActionChange}>
          <option value="-1">All</option>
          {countriesListDOM}
        </select>
      </div>
    </div>
  );
}
