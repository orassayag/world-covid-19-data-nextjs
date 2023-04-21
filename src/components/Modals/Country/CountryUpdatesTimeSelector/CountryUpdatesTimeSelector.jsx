import styles from './CountryUpdatesTimeSelector.module.scss';
import HoursSelect from '../../../Common/HoursSelect/HoursSelect';

export default function CountryUpdatesTimeSelector({ onActionChange, updatesHoursCount }) {
  return (
    <div className={styles.time_selector}>
      <HoursSelect
        updatesHoursCount={updatesHoursCount}
        onActionChange={onActionChange}
      />
    </div>
  );
}
