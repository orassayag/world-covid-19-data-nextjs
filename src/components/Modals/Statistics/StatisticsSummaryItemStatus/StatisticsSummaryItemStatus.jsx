import styles from './StatisticsSummaryItemStatus.module.scss';
import { Icon } from '../../../UI';

export default function StatisticsSummaryItemStatus({
  sourceName, sourceStatusIconName, sourceNameClass,
}) {
  return (
    <>
      <div className={styles.source_status}>
        <Icon
          className="statistics"
          name={sourceStatusIconName}
        />
      </div>
      <div className={`${styles.source_name} ${styles[sourceNameClass]}`}>
        {sourceName}
      </div>
    </>
  );
}
