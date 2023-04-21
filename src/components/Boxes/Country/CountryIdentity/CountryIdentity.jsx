import styles from './CountryIdentity.module.scss';
import CountryImage from '../CountryImage/CountryImage';
import CountryInfo from '../CountryInfo/CountryInfo';
import CountryRemove from '../CountryRemove/CountryRemove';

export default function CountryIdentity({
  displayName, upperCode2, titleClassName, flagClassName, populationCountDisplay,
  populationPercentageDisplay,
}) {
  return (
    <div className={styles.identity}>
      <CountryImage
        flagClassName={flagClassName}
      />
      <CountryInfo
        displayName={displayName}
        upperCode2={upperCode2}
        titleClassName={titleClassName}
        populationCountDisplay={populationCountDisplay}
        populationPercentageDisplay={populationPercentageDisplay}
      />
      <CountryRemove />
    </div>
  );
}
