import styles from './StatisticsSummary.module.scss';
import StatisticsSummarySources from '../StatisticsSummarySources/StatisticsSummarySources';
import StatisticsSummaryTop from '../StatisticsSummaryTop/StatisticsSummaryTop';

export default function StatisticsSummary() {
  return (
    <div className={styles.summary}>
      <div className={styles.title}>
        Statistics
      </div>
      <div className={styles.data}>
        <StatisticsSummaryTop />
      </div>
      <StatisticsSummarySources />
    </div>
  );
}
