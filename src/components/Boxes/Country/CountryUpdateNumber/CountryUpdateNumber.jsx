import styles from './CountryUpdateNumber.module.scss';

export default function CountryUpdateNumber({ dataItem }) {
  const { iconName, updateType, countDisplay } = dataItem;

  return (
    <div className={styles[iconName]}>
      {updateType}
      {countDisplay}
    </div>
  );
}
