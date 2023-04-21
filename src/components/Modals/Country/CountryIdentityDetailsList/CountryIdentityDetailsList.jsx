import styles from './CountryIdentityDetailsList.module.scss';
import CountryIdentityDetailsItem from '../CountryIdentityDetailsItem/CountryIdentityDetailsItem';

export default function CountryIdentityDetailsList({ countryDetailsList }) {
  const itemsDOM = [];
  for (let i = 0; i < countryDetailsList.length; i += 1) {
    itemsDOM.push(
      (<CountryIdentityDetailsItem
        key={i}
        countryIdentityItem={countryDetailsList[i]}
      />),
    );
  }

  return (
    <div className={styles.details_list}>
      {itemsDOM}
    </div>
  );
}
