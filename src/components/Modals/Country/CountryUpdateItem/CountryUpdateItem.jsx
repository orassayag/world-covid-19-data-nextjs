import styles from './CountryUpdateItem.module.scss';
import CountryUpdateItemSource from '../CountryUpdateItemSource/CountryUpdateItemSource';

export default function CountryUpdateItem({ statisticUpdate }) {
  const {
    updateClassName, sourceName, dataItems, lastUpdateDateDisplay,
  } = statisticUpdate;
  const itemsDOM = [];
  for (let i = 0; i < dataItems.length; i += 1) {
    itemsDOM.push(
      (<CountryUpdateItemSource
        key={i}
        updateClassName={updateClassName}
        item={dataItems[i]}
      />),
    );
  }

  return (
    <div className={styles.update_item}>
      <div className={styles.source}>
        {sourceName}
      </div>
      {itemsDOM}
      <CountryUpdateItemSource
        key="time"
        item={{
          type: 'time',
          iconName: 'clock',
          updateType: '',
          count: lastUpdateDateDisplay,
          countDisplay: lastUpdateDateDisplay,
        }}
      />
    </div>
  );
}
