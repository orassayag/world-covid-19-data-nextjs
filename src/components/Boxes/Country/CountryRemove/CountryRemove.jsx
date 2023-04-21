import styles from './CountryRemove.module.scss';
import { Icon } from '../../../UI';

export default function CountryRemove() {
  return (
    <div className={styles.remove}>
      <Icon
        name="times"
        iconName="remove"
      />
    </div>
  );
}
