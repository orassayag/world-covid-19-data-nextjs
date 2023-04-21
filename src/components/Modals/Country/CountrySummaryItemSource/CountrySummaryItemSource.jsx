import styles from './CountrySummaryItemSource.module.scss';
import { Icon } from '../../../UI';

export default function CountrySummaryItemSource({ dataItem }) {
  const { type, iconName, valueDisplay } = dataItem;

  return (
    <div className={styles[`source_${type}`]}>
      <Icon
        name={iconName}
      />
      {' '}
      {valueDisplay}
    </div>
  );
}
