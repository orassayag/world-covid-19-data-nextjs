import styles from './CountrySummaryItemTotal.module.scss';
import CountrySummaryItemSource from '../CountrySummaryItemSource/CountrySummaryItemSource';

export default function CountrySummaryItemTotal({ totalSummaryData }) {
  const { dataItems } = totalSummaryData;
  const summaryItemsTotalDOM = [];
  for (let i = 0; i < dataItems.length; i += 1) {
    summaryItemsTotalDOM.push((
      <CountrySummaryItemSource
        key={i}
        dataItem={dataItems[i]}
      />
    ));
  }

  return (
    <>
      <div className={styles.delimiter} />
      <div className={`${styles.source_item} ${styles.total}`}>
        {summaryItemsTotalDOM}
      </div>
    </>
  );
}
