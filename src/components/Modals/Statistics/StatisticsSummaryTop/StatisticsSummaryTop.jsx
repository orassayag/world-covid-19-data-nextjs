import styles from './StatisticsSummaryTop.module.scss';

export default function StatisticsSummaryTop() {
  return (
    <div className={styles.statistic_item}>
      <div className={styles.name}>
        Start Session:
      </div>
      <div className={styles.value}>
        UTC 30/06/2020 11:01:34 (10d 23h 23min ago)
      </div>
    </div>
  );
}
