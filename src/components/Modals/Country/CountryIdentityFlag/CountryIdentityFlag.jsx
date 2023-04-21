import styles from './CountryIdentityFlag.module.scss';

export default function CountryIdentityFlag({ bigFlagClassName }) {
  return (
    <div className={styles.flag_container}>
      <div className={`${styles.big_flag} ${bigFlagClassName}`} />
    </div>
  );
}
