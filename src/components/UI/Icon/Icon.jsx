import styles from './Icon.module.scss';

export default function Icon({
  className, name, value, type, tooltip, tooltipDirection, iconName, isSpin,
}) {
  const tooltipAttr = tooltip ? { [`data-tip-${tooltipDirection || 'top'}`]: tooltip } : null;

  return (
    <span className={className ? styles[className] : ''} {...tooltipAttr}>
      <i className={`${styles.icon} ${className === 'sorts' ? styles[`fa-${name}`] : ''} fa${type || 's'} fa-${name}${isSpin ? ' fa-spin' : ''} ${value && value.includes('on') ? styles.on : ''}`} name={iconName} />
    </span>
  );
}
