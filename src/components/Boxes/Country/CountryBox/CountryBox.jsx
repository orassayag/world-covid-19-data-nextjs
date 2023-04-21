import { memo, forwardRef } from 'react';
import styles from './CountryBox.module.scss';
import CountryData from '../CountryData/CountryData';
import CountryIdentity from '../CountryIdentity/CountryIdentity';
import CountryLeading from '../CountryLeading/CountryLeading';
import CountryNoData from '../CountryNoData/CountryNoData';
import CountryStatistics from '../CountryStatistics/CountryStatistics';
import CountryUpdatePanel from '../CountryUpdatePanel/CountryUpdatePanel';
import { countryService } from '../../../../services';

const compareCountryProps = (prevProps, nextProps) => {
  if (prevProps.isRefreshMode && nextProps.isRefreshMode) {
    return true;
  }
  return countryService.compareCountryProps(prevProps, nextProps);
};

// React memo works only with separated properties.
const CountryBox = memo(forwardRef(({
  id, displayName, upperCode2,
  titleClassName,
  leadingClassName, innerLeadingClassName,
  leadingIconName, flagClassName, locationClassName, boxClassName, order, googleMapsURL,
  populationCountDisplay,
  populationPercentageDisplay, leadingValueDisplay, isVisible, isContainData, updateSourceData,
  statisticsData,
  sourcesData, sourcesList, onActionClick,
}, ref) => {
  if (!isVisible) {
    return null;
  }
  let dataDOM = null;
  if (isContainData) {
    dataDOM = (
      <CountryData
        sourcesData={sourcesData}
        sourcesList={sourcesList}
        updateSourceName={updateSourceData ? updateSourceData.sourceName : ''}
      />
    );
  } else {
    dataDOM = (<CountryNoData />);
  }

  const getStyles = () => {
    let stylesTypes = '';
    if (boxClassName) {
      if (boxClassName.includes('alert')) {
        stylesTypes += `${styles.alert} `;
      }
      if (boxClassName.includes('all')) {
        stylesTypes += `${styles.all}`;
      }
      if (boxClassName.includes('death')) {
        stylesTypes += `${styles.death}`;
      }
      if (boxClassName.includes('recover')) {
        stylesTypes += `${styles.recover}`;
      }
      if (boxClassName.includes('case')) {
        stylesTypes += `${styles.case}`;
      }
    }
    return stylesTypes;
  };

  return (
    <div
      className={`${styles.box} ${getStyles()}`}
      style={{ order }}
      ref={ref}
      name="country"
      data-action="modal"
      data-country-id={id}
      onClick={onActionClick}
      onKeyDown={onActionClick}
      role="button"
      tabIndex="0"
    >
      <CountryUpdatePanel
        updateSourceData={updateSourceData}
      />
      <CountryIdentity
        displayName={displayName}
        upperCode2={upperCode2}
        titleClassName={titleClassName}
        flagClassName={flagClassName}
        populationCountDisplay={populationCountDisplay}
        populationPercentageDisplay={populationPercentageDisplay}
      />
      <CountryLeading
        leadingClassName={leadingClassName}
        innerLeadingClassName={innerLeadingClassName}
        leadingValueDisplay={leadingValueDisplay}
        leadingIconName={leadingIconName}
        locationClassName={locationClassName}
        googleMapsURL={googleMapsURL}
      />
      {dataDOM}
      <CountryStatistics
        statisticsData={statisticsData}
      />
    </div>
  );
}, compareCountryProps));

export default CountryBox;
