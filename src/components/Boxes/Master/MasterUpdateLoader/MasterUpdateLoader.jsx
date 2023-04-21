import styles from './MasterUpdateLoader.module.scss';
import { Icon } from '../../../UI';

export default function MasterUpdateLoader({ isSpin }) {
  if (!isSpin) {
    return null;
  }

  return (
    <div className={styles.update_loader}>
      <Icon
        name="sync-alt"
        isSpin
      />
    </div>
  );
}
