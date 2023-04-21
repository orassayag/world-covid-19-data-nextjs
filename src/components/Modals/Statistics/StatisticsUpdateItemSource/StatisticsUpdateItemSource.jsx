import styles from './StatisticsUpdateItemSource.module.scss';
import { Icon } from '../../../UI';

export default function StatisticsUpdateItemSource({ updateClassName, item }) {
  const {
    type, iconName, updateType, count, countDisplay,
  } = item;

  return (
    <div className={`${updateClassName && updateClassName.includes(type) ? styles.alert : ''} ${styles[type]}`}>
      {count
        && (
        <>
          <Icon
            name={iconName}
          />
          {' '}
          {updateType}
          {countDisplay}
        </>
        )}
    </div>
  );
}
