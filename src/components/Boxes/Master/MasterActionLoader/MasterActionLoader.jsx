import styles from './MasterActionLoader.module.scss';
import { Icon } from '../../../UI';

export default function MasterActionLoader({ refreshSourceName }) {
  return (
    <div className={styles.action_loader}>
      <Icon
        name="sync-alt"
        isSpin
      />
      {refreshSourceName
                && (
                <div className={styles.source}>
                  Source:
                  {' '}
                  {refreshSourceName}
                </div>
                )}
    </div>
  );
}
