import styles from './CountryImage.module.scss';

export default function CountryImage({ flagClassName }) {
  return (
    <div className={styles.image}>
      <div>
        <i className={flagClassName === 'flag world' ? styles.world : flagClassName} />
      </div>
    </div>
  );
}
