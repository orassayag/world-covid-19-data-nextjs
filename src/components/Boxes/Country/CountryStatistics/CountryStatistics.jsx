import styles from './CountryStatistics.module.scss';
import CountryStatisticsItem from '../CountryStatisticsItem/CountryStatisticsItem';

export default function CountryStatistics({ statisticsData }) {
  const statisticsDOM = [];
  for (let i = 0; i < statisticsData.length; i += 1) {
    statisticsDOM.push(
      (<CountryStatisticsItem
        key={i}
        statisticsDataItem={statisticsData[i]}
      />),
    );
  }

  return (
    <div className={styles.statistics}>
      {statisticsDOM}
    </div>
  );
}
