import styles from './CountrySummary.module.scss';
import CountrySummarySources from '../CountrySummarySources/CountrySummarySources';

export default function StatisticsSummary({ sourcesList, summaryData }) {
  return (
    <div className={styles.country_summary}>
      <div className={styles.title}>
        Statistics
      </div>
      <CountrySummarySources
        sourcesList={sourcesList}
        summaryData={summaryData}
      />
    </div>
  );
}
