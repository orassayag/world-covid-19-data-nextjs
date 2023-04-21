import styles from './CountryStatisticsItem.module.scss';
import { Icon } from '../../../UI';

export default function CountryStatisticsItem({ statisticsDataItem }) {
  const { value, iconName } = statisticsDataItem;

  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <Icon
          name={iconName}
        />
      </div>
      <div className={styles.number}>
        {value}
      </div>
    </div>
  );
}
