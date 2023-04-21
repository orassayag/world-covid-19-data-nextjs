import styles from './CountryLeading.module.scss';
import CountryLeadingBox from '../CountryLeadingBox/CountryLeadingBox';
import CountryLocation from '../CountryLocation/CountryLocation';

export default function CountryLeading({
  leadingClassName, innerLeadingClassName, leadingValueDisplay, leadingIconName,
  locationClassName, googleMapsURL,
}) {
  return (
    <div className={styles.leading}>
      <CountryLocation
        locationClassName={locationClassName}
        googleMapsURL={googleMapsURL}
      />
      <CountryLeadingBox
        leadingClassName={leadingClassName}
        innerLeadingClassName={innerLeadingClassName}
        leadingValueDisplay={leadingValueDisplay}
        leadingIconName={leadingIconName}
      />
    </div>
  );
}
