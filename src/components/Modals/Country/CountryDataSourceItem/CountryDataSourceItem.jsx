import { Fragment } from 'react';
import styles from './CountryDataSourceItem.module.scss';
import { textUtils } from '../../../../utils';
import CountryDataSourceDisplayItem from '../CountryDataSourceDisplayItem/CountryDataSourceDisplayItem';
import CountryDataSourceDisplayItemNoData from '../CountryDataSourceDisplayItemNoData/CountryDataSourceDisplayItemNoData';

export default function CountryDataSourceItem({
  source, data, updateSourceName, populationCount,
}) {
  const {
    upperName, lowerName, isActive, isError,
  } = source;
  const isAlert = updateSourceName && updateSourceName === lowerName;
  const itemsDOM = [];
  if (data) {
    const { dataItems } = data;
    for (let i = 0; i < dataItems.length; i += 1) {
      const {
        itemClass, iconName, count, countDisplay, countPerMillionDisplay,
        perMillionIconName,
      } = dataItems[i];
      itemsDOM.push(
        (
          <Fragment key={i}>
            <CountryDataSourceDisplayItem
              itemClassName={`big${itemClass}`}
              iconName={iconName}
              number={countDisplay}
              percentage={textUtils.getPercentageDisplay(count, populationCount)}
            />
            <CountryDataSourceDisplayItem
              itemClassName={`small${itemClass}`}
              iconName={perMillionIconName}
              number={countPerMillionDisplay}
              percentage={null}
            />
          </Fragment>
        ),
      );
    }
  } else {
    itemsDOM.push(
      (<CountryDataSourceDisplayItemNoData key={lowerName} />),
    );
  }

  return (
    <div className={`${styles.data_item} ${!isActive || isError ? styles.not_active : isAlert ? styles.alert : ''}`}>
      <div className={`${styles.name} ${isAlert ? styles.active : ''}`}>{upperName}</div>
      <div className={`${styles.items} ${data ? '' : styles.no_data}`}>
        {itemsDOM}
      </div>
    </div>
  );
}
