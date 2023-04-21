import styles from './MasterHeaderIcon.module.scss';
import { Icon } from '../../../UI';

export default function MasterHeaderIcon({
  iconName, iconTooltip, value, valueClass,
}) {
  const getStyles = () => {
    let stylesTypes = '';
    if (valueClass) {
      if (valueClass.includes('source')) {
        stylesTypes += ` ${styles.source}`;
      }
      if (valueClass.includes('alert')) {
        stylesTypes += ` ${styles.alert}`;
      }
    }
    return stylesTypes;
  };

  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <Icon
          name={iconName}
          tooltip={iconTooltip}
          tooltipDirection="bottom"
        />
      </div>
      <div className={`${styles.value} ${getStyles()}`}>
        {value}
      </div>
    </div>
  );
}
