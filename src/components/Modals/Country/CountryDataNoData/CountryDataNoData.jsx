import styles from './CountryDataNoData.module.scss';
import { Icon } from '../../../UI';

export default function CountryDataNoData() {
  return (
    <div className={styles.no_data_container}>
      <div className={styles.icon}>
        <Icon
          name="search"
        />
      </div>
      <div className={styles.title}>
        No Data Found
      </div>
    </div>
  );
}
