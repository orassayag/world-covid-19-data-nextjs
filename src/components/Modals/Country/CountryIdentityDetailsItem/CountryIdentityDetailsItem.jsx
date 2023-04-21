import styles from './CountryIdentityDetailsItem.module.scss';
import { Icon } from '../../../UI';

export default function CountryIdentityDetailsItem({ countryIdentityItem }) {
  const {
    itemClassName, iconName, iconTooltip, iconType, value, isLastItem, isIconOnly, isURL, urlText,
  } = countryIdentityItem;
  let valueContainerDOM = null;
  if (isURL) {
    valueContainerDOM = (<a href={value} rel="noopener noreferrer" target="_blank">{urlText}</a>);
  } else {
    const iconDOM = (
      <Icon
        name={iconName}
        type={iconType}
        tooltip={null}
        tooltipDirection={null}
      />
    );
    valueContainerDOM = isIconOnly ? (<a href={value} rel="noopener noreferrer" target="_blank">{iconDOM}</a>) : iconDOM;
  }

  return (
    <div className={`${styles.details_item} ${itemClassName ? styles[itemClassName.trim()] : ''}`}>
      <span className={styles.icon} data-tip-country={iconTooltip}>
        {valueContainerDOM}
        {isIconOnly || isURL ? '' : value}
      </span>
      {!isLastItem
        && <span>|</span>}
    </div>
  );
}
