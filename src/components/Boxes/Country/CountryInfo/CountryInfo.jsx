import styles from './CountryInfo.module.scss';
import CountryName from '../CountryName/CountryName';
import CountryPopulation from '../CountryPopulation/CountryPopulation';

export default function CountryInfo({
  displayName, upperCode2, titleClassName, populationCountDisplay, populationPercentageDisplay,
}) {
  return (
    <div className={styles.info}>
      <CountryName
        displayName={displayName}
        upperCode2={upperCode2}
        titleClassName={titleClassName}
      />
      <CountryPopulation
        populationCountDisplay={populationCountDisplay}
        populationPercentageDisplay={populationPercentageDisplay}
      />
    </div>
  );
}
