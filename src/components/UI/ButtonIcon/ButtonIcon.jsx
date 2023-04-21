import Icon from '../Icon/Icon';

export default function ButtonIcon({
  className, name, value, action, type, tooltip, tooltipDirection, iconName, onClick,
}) {
  return (
    <button type="button" onClick={onClick} data-action={action}>
      <Icon
        className={className}
        name={name}
        value={value}
        type={type}
        tooltip={tooltip}
        tooltipDirection={tooltipDirection}
        iconName={iconName}
      />
    </button>
  );
}
