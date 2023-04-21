import styles from './CountrySummaryItem.module.scss';
import CountrySummaryItemSource from '../CountrySummaryItemSource/CountrySummaryItemSource';
import CountrySummaryItemStatus from '../CountrySummaryItemStatus/CountrySummaryItemStatus';

export default function CountrySummaryItem({ sourceName, sourceSummaryData }) {
  const { itemClassName, dataItems } = sourceSummaryData;
  const summaryItemsDOM = [];
  for (let i = 0; i < dataItems.length; i += 1) {
    summaryItemsDOM.push((
      <CountrySummaryItemSource
        key={i}
        dataItem={dataItems[i]}
      />
    ));
  }

  return (
    <div className={`${styles.source_item} ${styles[itemClassName.trim()]}`}>
      <CountrySummaryItemStatus
        sourceName={sourceName}
      />
      {summaryItemsDOM}
    </div>
  );
}
