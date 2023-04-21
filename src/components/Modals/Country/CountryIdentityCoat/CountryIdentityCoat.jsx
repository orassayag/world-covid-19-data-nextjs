import styles from './CountryIdentityCoat.module.scss';

export default function CountryIdentityCoat({ coatClassName }) {
  return (
    <div className={styles.coat_container}>
      {coatClassName
        && <div className={`coat ${coatClassName}`} />}
    </div>
  );
}
