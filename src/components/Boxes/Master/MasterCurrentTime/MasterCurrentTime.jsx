import styles from './MasterCurrentTime.module.scss';
import { Icon } from '../../../UI';
import { timeUtils } from '../../../../utils';

export default function MasterCurrentTime({ currentTime }) {
  return (
    <div className={styles.current_item}>
      <div className={styles.icon}>
        <Icon
          styles={styles}
          name="clock"
          tooltip="The current time"
        />
      </div>
      <div className={styles.time}>
        {currentTime
                    && (
                    <div className={styles.current_time}>
                      {timeUtils.getDateTimeDisplay(currentTime)}
                      {' '}
                      UTC
                    </div>
                    )}
      </div>
    </div>
  );
}
