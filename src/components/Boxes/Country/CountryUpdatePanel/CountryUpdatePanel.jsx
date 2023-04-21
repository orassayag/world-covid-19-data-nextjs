import styles from './CountryUpdatePanel.module.scss';
import CountryUpdateNumber from '../CountryUpdateNumber/CountryUpdateNumber';

export default function CountryUpdatePanel({ updateSourceData }) {
  if (!updateSourceData) {
    return null;
  }
  const { sourceName, dataItems } = updateSourceData;
  const itemsDOM = [];
  for (let i = 0; i < dataItems.length; i += 1) {
    itemsDOM.push((
      <CountryUpdateNumber
        key={i}
        dataItem={dataItems[i]}
      />
    ));
  }

  return (
    <div className={`${styles.update_panel} ${styles[sourceName]}`}>
      <div className={styles.inner}>
        <div className={styles.changes}>
          {itemsDOM}
        </div>
      </div>
    </div>
  );
}
