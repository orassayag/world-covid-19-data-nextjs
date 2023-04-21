export default function CountryLocationExists({ locationClassName, styles }) {
  return (
    <div>
      <span className={`${styles.location} location night ${locationClassName}`} />
    </div>
  );
}
