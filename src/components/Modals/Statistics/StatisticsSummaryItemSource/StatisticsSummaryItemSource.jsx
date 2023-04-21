import styles from './StatisticsSummaryItemSource.module.scss';
import { Icon } from '../../../UI';

export default function StatisticsSummaryItemSource({
  sourceName, iconName, valueDisplay,
}) {
  return (
    <div className={styles[`source_${sourceName}`]}>
      <Icon
        name={iconName}
      />
      {' '}
      {valueDisplay}
    </div>
  );
}
