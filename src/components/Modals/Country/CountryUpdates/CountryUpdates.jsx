import styles from './CountryUpdates.module.scss';
import CountryUpdatesData from '../CountryUpdatesData/CountryUpdatesData';
import CountryUpdatesTimeSelector from '../CountryUpdatesTimeSelector/CountryUpdatesTimeSelector';
import { textUtils } from '../../../../utils';

export default function CountryUpdates({
  onActionChange, updatesList, updatesHoursCount,
}) {
  return (
    <div className={styles.country_updates}>
      <div className={styles.latest_updates}>
        <div className={styles.title}>
          Latest Updates (
          {textUtils.getStringCommaFromNumber(updatesList.length)}
          )
        </div>
        <CountryUpdatesTimeSelector
          updatesHoursCount={updatesHoursCount}
          onActionChange={onActionChange}
        />
      </div>
      <CountryUpdatesData
        updatesList={updatesList}
      />
    </div>
  );
}
