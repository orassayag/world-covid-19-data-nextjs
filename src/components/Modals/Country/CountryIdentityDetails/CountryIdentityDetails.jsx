import styles from './CountryIdentityDetails.module.scss';
import CountryIdentityDetailsList from '../CountryIdentityDetailsList/CountryIdentityDetailsList';
import CountryIdentityTitle from '../CountryIdentityTitle/CountryIdentityTitle';

export default function CountryIdentityDetails({ displayName, countryDetailsList }) {
  return (
    <div className={styles.identity_details}>
      <CountryIdentityTitle
        displayName={displayName}
      />
      <CountryIdentityDetailsList
        countryDetailsList={countryDetailsList}
      />
    </div>
  );
}
