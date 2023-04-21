import styles from './CountrySummarySources.module.scss';
import CountrySummaryItem from '../CountrySummaryItem/CountrySummaryItem';
import CountrySummaryItemTotal from '../CountrySummaryItemTotal/CountrySummaryItemTotal';

export default function CountrySummarySources({ sourcesList, summaryData }) {
  const summaryDataItemsDOM = [];
  for (let i = 0; i < sourcesList.length; i += 1) {
    const source = sourcesList[i];
    if (!source.isCovidData) {
      continue;
    }
    summaryDataItemsDOM.push(
      (<CountrySummaryItem
        key={i}
        sourceName={source.upperName}
        sourceSummaryData={summaryData.summaryDataList[source.lowerName]}
      />),
    );
  }

  return (
    <div className={styles.statistics_sources}>
      {summaryDataItemsDOM}
      <CountrySummaryItemTotal
        totalSummaryData={summaryData.totalSummaryData}
      />
    </div>
  );
}
