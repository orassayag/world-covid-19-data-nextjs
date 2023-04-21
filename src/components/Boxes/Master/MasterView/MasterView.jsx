import styles from './MasterView.module.scss';
import { ButtonIcon } from '../../../UI';

export default function MasterView({
  viewType, value, action, viewTitle, viewsIconNames, viewsIconTooltips, viewsIconAttributeNames,
  onClick,
}) {
  const iconsDOM = [];
  for (let i = 0; i < 2; i += 1) {
    iconsDOM.push((
      <div className={styles.icon} key={i}>
        <ButtonIcon
          className="views"
          name={viewsIconNames[i]}
          value={viewsIconAttributeNames[i] === value ? 'on' : ''}
          action={action}
          tooltip={viewsIconTooltips[i]}
          iconName={viewsIconAttributeNames[i]}
          onClick={onClick}
        />
      </div>
    ));
  }

  return (
    <div className={`${styles.view} ${styles[viewType]}`}>
      <div className={styles.title}>
        {viewTitle}
      </div>
      {iconsDOM}
    </div>
  );
}
