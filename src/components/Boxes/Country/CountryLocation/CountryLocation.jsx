import styles from './CountryLocation.module.scss';
import CountryLocationEmpty from '../CountryLocationEmpty/CountryLocationEmpty';
import CountryLocationExists from '../CountryLocationExists/CountryLocationExists';
import CountryLocationUnknown from '../CountryLocationUnknown/CountryLocationUnknown';

export default function CountryLocation({ locationClassName, googleMapsURL }) {
  let locationDOM = null;
  if (locationClassName && googleMapsURL) {
    locationDOM = (
      <CountryLocationExists
        styles={styles}
        locationClassName={locationClassName}
      />
    );
  } else if (!locationClassName && googleMapsURL) {
    locationDOM = (
      <CountryLocationUnknown
        styles={styles}
      />
    );
  } else {
    locationDOM = (
      <CountryLocationEmpty
        styles={styles}
      />
    );
  }

  return (
    <div className={styles.location_container}>
      {locationDOM}
    </div>
  );
}
