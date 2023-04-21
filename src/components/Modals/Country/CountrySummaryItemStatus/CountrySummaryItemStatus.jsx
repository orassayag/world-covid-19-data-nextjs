import styles from './CountrySummaryItemStatus.module.scss';

export default function CountrySummaryItemStatus({ sourceName }) {
  return (
    <div className={styles.source_name}>
      {sourceName}
    </div>
  );
}
