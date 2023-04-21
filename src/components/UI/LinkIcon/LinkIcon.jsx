import Icon from '../Icon/Icon';

export default function LinkIcon({
  className, name, link, type, tooltip, tooltipDirection, iconName,
}) {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <Icon
        className={className}
        name={name}
        type={type}
        tooltip={tooltip}
        tooltipDirection={tooltipDirection}
        iconName={iconName}
      />
    </a>
  );
}
