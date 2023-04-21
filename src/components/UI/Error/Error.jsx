import styles from './Error.module.scss';

export default function Error({ isDisplayError }) {
  return (
    <div className={`${styles.error_container}${isDisplayError ? styles.active : ''}`}>
      <div className={styles.error_content}>
        <i className="fas fa-frown" />
        <div className={styles.error_information}>
          <div className={styles.error_title}>
            Oppss... Something bad happened...
          </div>
          <div className={styles.error_description}>
            An unexpected error has been occurred
          </div>
          <div className={styles.error_code}>
            Error code: 1000013
          </div>
        </div>
      </div>
    </div>
  );
}
