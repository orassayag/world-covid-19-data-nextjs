import styles from './CountryUpdatesData.module.scss';
import CountryUpdateItem from '../CountryUpdateItem/CountryUpdateItem';

export default function CountryUpdatesData({ updatesList }) {
  const itemsDOM = [];
  for (let i = 0; i < updatesList.length; i += 1) {
    const update = updatesList[i];
    itemsDOM.push(
      (<CountryUpdateItem
        key={update.id}
        statisticUpdate={update}
      />),
    );
  }

  return (
    <div className={styles.data}>
      {itemsDOM}
    </div>
  );
}
