import styles from './CountrySource.module.scss';
import CountrySourceItem from '../CountrySourceItem/CountrySourceItem';
import CountrySourceName from '../CountrySourceName/CountrySourceName';
import CountrySourceNoData from '../CountrySourceNoData/CountrySourceNoData';

export default function CountrySource({
  source, data, updateSourceName,
}) {
  const {
    lowerName, upperName, isActive, isError,
  } = source;
  let itemsDOM = null;
  if (data) {
    const { dataItems } = data;
    itemsDOM = [];
    for (let i = 0; i < dataItems.length; i += 1) {
      itemsDOM.push(
        (<CountrySourceItem
          key={i}
          dataItem={dataItems[i]}
        />),
      );
    }
    itemsDOM = (
      <div className={styles.items}>
        {itemsDOM}
      </div>
    );
  } else {
    itemsDOM = (<CountrySourceNoData />);
  }

  return (
    <div className={`${styles.source} ${!isActive || isError ? styles.not_active : ''}`}>
      <CountrySourceName
        upperName={upperName}
        lowerName={lowerName}
        updateSourceName={updateSourceName}
      />
      {itemsDOM}
    </div>
  );
}
