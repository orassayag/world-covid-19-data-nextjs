import styles from './CountryPopulation.module.scss';
import { Icon } from '../../../UI';

export default function CountryPopulation({ populationCountDisplay, populationPercentageDisplay }) {
  return (
    <div className={styles.population}>
      <div className={styles.icon}>
        <Icon
          name="users"
        />
      </div>
      <div className={styles.number}>
        {populationCountDisplay}
        {populationPercentageDisplay ? ` (${populationPercentageDisplay}%)` : ''}
      </div>
    </div>
  );
}
