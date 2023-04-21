import styles from './CountryNoData.module.scss';
import { Icon } from '../../../UI';

export default function CountryNoData() {
  return (
    <div className={styles.no_data_container}>
      <Icon
        name="fa-search"
      />
      <div className={styles.title}>
        No Data Found
      </div>
    </div>
  );
}
