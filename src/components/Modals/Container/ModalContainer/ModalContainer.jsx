import { useSelector } from 'react-redux';
import styles from './ModalContainer.module.scss';
import CountriesModal from '../../Countries/CountriesModal/CountriesModal';
import CountryModel from '../../Country/CountryModal/CountryModal';
import CreditsModal from '../../Credits/CreditsModal/CreditsModal';
import SourcesModal from '../../Sources/SourcesModal/SourcesModal';
import StatisticsModal from '../../Statistics/StatisticsModal/StatisticsModal';
import { ModalNameEnum } from '../../../../core/enums';
import { engineService } from '../../../../services';

export default function ModalContainer({ onActionClick, onActionChange }) {
  // State variables.
  const settingsList = useSelector((state) => state.settings.settingsList);
  const statisticsUpdatesList = useSelector((state) => state
    .statisticsUpdates.statisticsUpdatesList);
  const statisticsUpdatesSettingsList = useSelector((state) => state
    .statisticsUpdates.statisticsUpdatesSettingsList);
  const countriesList = useSelector((state) => state.data.countriesList);
  const countriesNameIdList = useSelector((state) => state.data.countriesNameIdList);
  const sourcesList = useSelector((state) => state.data.sourcesList);
  const { activeModalName, activeModalValue } = settingsList;
  const { statisticsUpdatesHoursCount, statisticsUpdatesCountryId } = statisticsUpdatesSettingsList;
  if (!activeModalName) {
    return null;
  }

  return (
    <div className={styles.modal}>
      {(() => {
        switch (activeModalName) {
          case ModalNameEnum.COUNTRIES: {
            return (
              <CountriesModal
                styles={styles}
                onActionClick={onActionClick}
              />
            );
          }
          case ModalNameEnum.COUNTRY: {
            const countryData = engineService.getCountryData({
              id: activeModalValue,
              countriesList,
              statisticsUpdatesList,
            });
            return (
              <CountryModel
                styles={styles}
                country={countryData.country}
                updatesList={countryData.updatesList}
                sourcesList={sourcesList}
                onActionClick={onActionClick}
              />
            );
          }
          case ModalNameEnum.CREDITS: {
            return (
              <CreditsModal
                styles={styles}
                onActionClick={onActionClick}
              />
            );
          }
          case ModalNameEnum.SOURCES: {
            return (
              <SourcesModal
                styles={styles}
                onActionClick={onActionClick}
              />
            );
          }
          case ModalNameEnum.STATISTICS: {
            return (
              <StatisticsModal
                styles={styles}
                countriesNameIdList={countriesNameIdList}
                statisticsUpdatesList={statisticsUpdatesList}
                statisticsUpdatesHoursCount={statisticsUpdatesHoursCount}
                statisticsUpdatesCountryId={statisticsUpdatesCountryId}
                onActionClick={onActionClick}
                onActionChange={onActionChange}
              />
            );
          }
          default: return null;
        }
      })()}
    </div>
  );
}
