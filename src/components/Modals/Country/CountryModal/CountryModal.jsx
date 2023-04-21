import { useCallback } from 'react';
import CountryData from '../CountryData/CountryData';
import CountryExitButton from '../CountryExitButton/CountryExitButton';
import CountryIdentity from '../CountryIdentity/CountryIdentity';
import { coreUtils } from '../../../../utils';
import { engineService } from '../../../../services';

export default function CountryModal({
  styles, country, updatesList, sourcesList, onActionClick,
}) {
  const {
    id, displayName, bigFlagClassName, coatClassName, populationCount,
    isContainData, updatesHoursCount, updateSourceData, sourcesData, summaryData,
  } = country;
  const countryDetailsList = engineService.getCountryIdentityDetailsList(country);
  // Update action on the country modal click.
  const handleActionChange = useCallback((e) => {
    engineService.runModalActionUpdate({
      modalName: 'Country',
      action: coreUtils.getAttributeName(e, 'data-action'),
      value: coreUtils.getValue(e),
      countryId: id,
    });
  }, []);

  return (
    <div className={`${styles.modal_content} ${styles.country} ${isContainData ? styles.no_data : ''} f16 f16-extra`}>
      <div className={styles.content}>
        <CountryExitButton
          styles={styles}
          onActionClick={onActionClick}
        />
        <CountryIdentity
          displayName={displayName}
          bigFlagClassName={bigFlagClassName}
          coatClassName={coatClassName}
          countryDetailsList={countryDetailsList}
        />
        <CountryData
          populationCount={populationCount}
          isContainData={isContainData}
          sourcesData={sourcesData}
          sourcesList={sourcesList}
          updateSourceData={updateSourceData}
          updatesList={updatesList}
          updatesHoursCount={updatesHoursCount}
          summaryData={summaryData}
          onActionClick={onActionClick}
          onActionChange={handleActionChange}
        />
      </div>
    </div>
  );
}
