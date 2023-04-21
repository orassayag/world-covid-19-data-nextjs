import styles from './StatisticsUpdateItem.module.scss';
import StatisticsUpdateItemSource from '../StatisticsUpdateItemSource/StatisticsUpdateItemSource';

export default function StatisticsUpdateItem({ onActionClick, statisticUpdate }) {
  const {
    id, sourceName, displayName, flagClassName, dataItems, lastUpdateDateDisplay, updateClassName,
  } = statisticUpdate;
  const itemsDOM = [];
  for (let i = 0; i < dataItems.length; i += 1) {
    itemsDOM.push(
      (<StatisticsUpdateItemSource
        key={i}
        updateClassName={updateClassName}
        item={dataItems[i]}
      />),
    );
  }

  return (
    <div className={styles.update_item} name="country" data-action="replace-modal" data-country-id={id} onClick={onActionClick}>
      <div className={styles.source}>
        {sourceName}
      </div>
      <div className={styles.country}>
        <i className={flagClassName === 'flag world' ? styles.world : flagClassName} />
      </div>
      <div className={styles.country_name}>
        {displayName}
      </div>
      {itemsDOM}
      <div className={styles.time}>
        {lastUpdateDateDisplay}
      </div>
    </div>
  );
}
