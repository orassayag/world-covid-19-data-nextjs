import { memo } from 'react';
import styles from './MasterHeader.module.scss';
import MasterBinaryClock from '../MasterBinaryClock/MasterBinaryClock';
import MasterHeaderIcon from '../MasterHeaderIcon/MasterHeaderIcon';
import { DataModeEnum } from '../../../../core/enums';

const MasterHeader = memo(({
  isLiveMode, isRecoverMode, intervalSeconds, currentTime, leadingSource, lastUpdateSourceName,
  isLastUpdateChanges, totalVisibleCountriesCount,
}) => {
  const dataModDisplay = isRecoverMode
    ? DataModeEnum.RECOVER : (isLiveMode ? DataModeEnum.LIVE : DataModeEnum.LOCAL);
  const iconNames = ['map-marker-alt', 'database', 'server'];
  const iconTooltips = ['Active countries count', 'Active sources count', 'Leading source name'];
  const values = [totalVisibleCountriesCount, 8, leadingSource.upperName];
  const valuesClasses = ['', '', ` source${leadingSource.upperName === lastUpdateSourceName && isLastUpdateChanges ? ' alert' : ''}`];
  const itemsDOM = [];
  for (let i = 0; i < 3; i += 1) {
    itemsDOM.push(
      (<MasterHeaderIcon
        key={i}
        iconName={iconNames[i]}
        iconTooltip={iconTooltips[i]}
        value={values[i]}
        valueClass={valuesClasses[i]}
      />),
    );
  }

  return (
    <div className={styles.logo_holder}>
      <div className={styles.line1}>
        <h3>World Covid</h3>
        <div className={styles.items}>
          {itemsDOM}
        </div>
        <MasterBinaryClock
          currentTime={currentTime}
        />
      </div>
      <div className={styles.line2}>
        <p>
          Covid 19 World Data
          <span className={styles.details}>{` | ${dataModDisplay} mode | ${intervalSeconds}sec`}</span>
        </p>
      </div>
    </div>
  );
});

export default MasterHeader;
