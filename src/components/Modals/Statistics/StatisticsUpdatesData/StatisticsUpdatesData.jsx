import styles from './StatisticsUpdatesData.module.scss';
import StatisticsUpdateItem from '../StatisticsUpdateItem/StatisticsUpdateItem';

export default function StatisticsUpdatesData({ statisticsUpdatesList, onActionClick }) {
  const itemsDOM = [];
  for (let i = 0; i < statisticsUpdatesList.length; i += 1) {
    const update = statisticsUpdatesList[i];
    itemsDOM.push(
      (<StatisticsUpdateItem
        key={update.id}
        statisticUpdate={update}
        onActionClick={onActionClick}
      />),
    );
  }

  return (
    <div className={styles.data}>
      {itemsDOM}
    </div>
  );
}
