import styles from './CountryData.module.scss';
import CountryDataNoData from '../CountryDataNoData/CountryDataNoData';
import CountryDataSourcesList from '../CountryDataSourcesList/CountryDataSourcesList';
import CountryDataTitle from '../CountryDataTitle/CountryDataTitle';
import CountryOkButton from '../CountryOkButton/CountryOkButton';
import CountrySummary from '../CountrySummary/CountrySummary';
import CountryUpdates from '../CountryUpdates/CountryUpdates';
import CountryUpdatePanel from '../CountryUpdatePanel/CountryUpdatePanel';

export default function CountryData({
  populationCount, isContainData, sourcesData, sourcesList, updateSourceData, updatesList,
  updatesHoursCount, summaryData, onActionClick, onActionChange,
}) {
  let dataDOM = null;
  if (isContainData) {
    const updateSourceName = updateSourceData ? updateSourceData.sourceName : '';
    dataDOM = (
      <>
        <div className={styles.live_data}>
          <CountryDataTitle />
          <CountryUpdatePanel
            updateSourceData={updateSourceData}
          />
          <CountryDataSourcesList
            sourcesData={sourcesData}
            sourcesList={sourcesList}
            updateSourceName={updateSourceName}
            populationCount={populationCount}
          />
        </div>
        <CountryUpdates
          updatesList={updatesList}
          updatesHoursCount={updatesHoursCount}
          onActionChange={onActionChange}
        />
        <CountrySummary
          sourcesList={sourcesList}
          summaryData={summaryData}
        />
      </>
    );
  } else {
    dataDOM = (<CountryDataNoData />);
  }

  return (
    <div className={`${styles.country_data} ${isContainData ? '' : styles.no_data}`}>
      {dataDOM}
      <CountryOkButton
        onActionClick={onActionClick}
      />
    </div>
  );
}
