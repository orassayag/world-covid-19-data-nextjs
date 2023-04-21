import styles from './CountryName.module.scss';

export default function CountryName({
  displayName, upperCode2, titleClassName,
}) {
  return (
    <div className={`${styles.name} ${titleClassName ? styles[titleClassName.trim()] : ''}`}>
      <div>
        {displayName}
        {upperCode2 ? ` (${upperCode2})` : ''}
      </div>
    </div>
  );
}
