import styles from './MasterLastUpdate.module.scss';
import { Icon } from '../../../UI';

export default function MasterLastUpdate({
  lastUpdateDateDisplay, lastUpdateSourceName, nextUpdateSourceName,
}) {
  return (
    <div className={styles.last_item}>
      {lastUpdateDateDisplay && lastUpdateSourceName && nextUpdateSourceName
                && (
                <>
                  <div className={styles.icon}>
                    <Icon
                      name="sync-alt"
                      tooltip="The last update time"
                    />
                  </div>
                  <div className={styles.time}>
                    <span className={styles.time_ago}>
                      {lastUpdateDateDisplay}
                      {' '}
                      ago |
                      {' '}
                      {lastUpdateSourceName}
                      <Icon
                        name="long-arrow-alt-right"
                      />
                      {' '}
                      {nextUpdateSourceName}

                    </span>
                  </div>
                </>
                )}
    </div>
  );
}
