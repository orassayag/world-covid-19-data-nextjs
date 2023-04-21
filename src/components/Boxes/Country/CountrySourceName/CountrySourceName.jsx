import styles from './CountrySourceName.module.scss';

export default function CountrySourceName({
  lowerName, upperName, updateSourceName,
}) {
  return (
    <div className={`${styles.name}${updateSourceName && updateSourceName === lowerName ? ' active' : ''}`}>
      {upperName}
    </div>
  );
}
