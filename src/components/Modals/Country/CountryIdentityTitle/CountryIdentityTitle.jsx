import styles from './CountryIdentityTitle.module.scss';

export default function CountryIdentityTitle({ displayName }) {
  return (
    <div className={styles.title}>
      {displayName}
    </div>
  );
}
