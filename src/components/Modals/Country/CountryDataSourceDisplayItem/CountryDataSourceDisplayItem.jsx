import styles from './CountryDataSourceDisplayItem.module.scss';
import { Icon } from '../../../UI';

export default function CountryDataSourceDisplayItem({
  itemClassName, iconName, number, percentage,
}) {
  const getStyles = () => {
    let stylesTypes = '';
    if (itemClassName) {
      if (itemClassName.includes('big')) {
        stylesTypes += ` ${styles.big}`;
      }
      if (itemClassName.includes('small')) {
        stylesTypes += ` ${styles.small}`;
      }
      if (itemClassName.includes('case')) {
        stylesTypes += ` ${styles.case}`;
      }
      if (itemClassName.includes('death')) {
        stylesTypes += ` ${styles.death}`;
      }
      if (itemClassName.includes('recover')) {
        stylesTypes += ` ${styles.recover}`;
      }
    }
    return stylesTypes;
  };

  return (
    <div className={`${styles.item} ${getStyles()}`}>
      <div className={styles.icon}>
        <span>
          <Icon
            name={iconName}
          />
        </span>
      </div>
      <div className={styles.number}>
        {number}
        {itemClassName === 'big' ? (
          <span className={styles.percentage}>
            {' '}
            | $
            {percentage}
            %
          </span>
        ) : ''}
      </div>
    </div>
  );
}
