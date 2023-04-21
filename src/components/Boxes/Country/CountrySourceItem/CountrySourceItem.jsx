import styles from './CountrySourceItem.module.scss';
import { Icon } from '../../../UI';

export default function CountrySourceItem({ dataItem }) {
  const {
    iconName, itemClass, numberClass, countDisplay,
  } = dataItem;

  return (
    <div className={`${styles.item} ${itemClass ? styles[itemClass.trim()] : ''}`}>
      <div className={styles.icon}>
        <Icon
          name={iconName}
        />
      </div>
      <div className={`${styles.number} ${numberClass ? styles[numberClass.trim()] : ''}`}>
        {countDisplay}
      </div>
    </div>
  );
}
