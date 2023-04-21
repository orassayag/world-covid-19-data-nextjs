import { memo } from 'react';
import styles from './MasterActions.module.scss';
import { ButtonIcon, LinkIcon } from '../../../UI';
import { creditService } from '../../../../services';

const MasterActions = memo(({
  isActive, isLiveMode, isRecoverMode, onActionClick,
}) => {
  const actionIconNames = ['power-off', 'sync', 'chart-pie', 'home', 'globe-americas', 'tools', 'user-circle'];
  const actions = ['active', 'refresh', 'modal', 'local', 'live', 'mode', 'modal'];
  const actionValues = [isActive ? 'on' : 'off', null, null, isLiveMode ? 'off' : 'on', isLiveMode ? 'on' : 'off', isRecoverMode ? 'on' : 'off', null];
  const actionIconAttributeNames = ['active', 'refresh', 'statistics', 'local', 'live', 'recover', 'credits'];
  const actionIconTooltips = [`Active (${isActive ? 'On' : 'Off'})`, 'Refresh data', 'Statistics', 'Local data mode', 'Live data mode', `Recover data mode (${isRecoverMode ? 'On' : 'Off'})`, 'Credits'];
  const actionFunctions = [onActionClick, onActionClick, onActionClick, onActionClick,
    onActionClick, null, onActionClick];
  const iconsDOM = [];
  for (let i = 0; i < 7; i += 1) {
    iconsDOM.push((
      <ButtonIcon
        key={i}
        className="actions"
        name={actionIconNames[i]}
        action={actions[i]}
        value={actionValues[i]}
        tooltip={actionIconTooltips[i]}
        iconName={actionIconAttributeNames[i]}
        onClick={actionFunctions[i]}
      />
    ));
  }
  for (let i = 0; i < creditService.masterCredits.length; i += 1) {
    const {
      title, link, iconName, iconType, iconTooltip,
    } = creditService.masterCredits[i];
    iconsDOM.push((
      <LinkIcon
        key={i}
        className="actions"
        name={iconName}
        link={link}
        type={iconType}
        tooltip={iconTooltip}
        iconName={title}
      />
    ));
  }

  return (
    <div className={styles.actions}>
      {iconsDOM.slice(0, 3)}
      <div className={styles.mode}>
        Mode
      </div>
      {iconsDOM.slice(3, 6)}
      <div className={styles.contact}>
        Help
      </div>
      {iconsDOM.slice(6, 10)}
    </div>
  );
});

export default MasterActions;
