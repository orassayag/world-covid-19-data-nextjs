import styles from './CountryIdentity.module.scss';
import CountryIdentityFlag from '../CountryIdentityFlag/CountryIdentityFlag';
import CountryIdentityCoat from '../CountryIdentityCoat/CountryIdentityCoat';
import CountryIdentityDetails from '../CountryIdentityDetails/CountryIdentityDetails';

export default function CountryIdentity({
  displayName, bigFlagClassName, coatClassName, countryDetailsList,
}) {
  return (
    <div className={styles.country_identity}>
      <CountryIdentityFlag
        bigFlagClassName={bigFlagClassName}
      />
      <CountryIdentityDetails
        displayName={displayName}
        countryDetailsList={countryDetailsList}
      />
      <CountryIdentityCoat
        coatClassName={coatClassName}
      />
    </div>
  );
}
