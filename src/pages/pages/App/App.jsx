import {
  useRef, useEffect, useCallback, createRef,
} from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import styles from './App.module.scss';
import {
  CountryBox, Error, Footer, MasterBox, ModalContainer, ScreenLoader,
} from '../../../components';
import {
  dataSlices, settingsSlices, statisticsSlices, statisticsUpdatesSlices,
} from '../../../store/slices';
import { ModalNameEnum } from '../../../core/enums';
import { engineService } from '../../../services';
import { coreUtils, validationUtils } from '../../../utils';

export default function App({ mode, int }) {
  const dispatch = useDispatch();
  // Refs.
  const elRefs = useRef([]);
  // State variables.
  const { settingsList, loadingList } = useSelector((state) => state.settings);
  const { sourcesList, countriesList } = useSelector((state) => state.data);
  const {
    isActive, isRefreshMode, viewType, isDisplayError, activeModalName,
    activeModalValue, isReplaceModalMode, isActionLoader,
  } = settingsList;
  const { loadingPercentage, isScreenLoaderComplete } = loadingList;
  const dataActions = dataSlices.dataSlice.actions;
  const settingsActions = settingsSlices.settingsSlice.actions;
  const statisticsActions = statisticsSlices.statisticsSlice.actions;
  const statisticsUpdatesActions = statisticsUpdatesSlices.statisticsUpdatesSlice.actions;
  // Functions to update the state.
  const onSetStateCurrentTime = (data) => dispatch(statisticsActions.setStateCurrentTime({ data }));
  const onSetStateSettingsList = (listName, listValues) => dispatch(settingsActions
    .setStateSettingsList({ listName, listValues }));
  const onSetStateStatisticsField = (fieldName, fieldValue) => dispatch(statisticsActions
    .setStateStatisticsField({ fieldName, fieldValue }));
  const onSetStateStatisticsList = (statisticsList) => dispatch(statisticsActions
    .setStateStatisticsList({ statisticsList }));
  const onSetStateStatisticsUpdatesSettingsList = (
    statisticsUpdatesSettingsList,
  ) => dispatch(statisticsUpdatesActions
    .setStateStatisticsUpdatesSettingsList({ statisticsUpdatesSettingsList }));
  const onSetStateDataCollection = (collectionName, collectionValue) => dispatch(dataActions
    .setStateDataCollection({ collectionName, collectionValue }));
  const onSetStateInitiateSettings = (data) => {
    const { settingsList, loadingList } = data;
    batch(() => {
      dispatch(settingsActions.setStateSettingsList({ listName: 'settingsList', listValues: settingsList }));
      dispatch(settingsActions.setStateSettingsList({ listName: 'loadingList', listValues: loadingList }));
    });
  };

  const onSetStateInitiateSources = (data) => {
    const {
      sourcesList, countriesList, countriesNameIdList, statisticsList, settingsList,
    } = data;
    batch(() => {
      dispatch(dataActions.setStateDataCollection({ collectionName: 'sourcesList', collectionValue: sourcesList }));
      dispatch(dataActions.setStateDataCollection({ collectionName: 'countriesList', collectionValue: countriesList }));
      dispatch(dataActions.setStateDataCollection({ collectionName: 'countriesNameIdList', collectionValue: countriesNameIdList }));
      dispatch(settingsActions.setStateSettingsList({ listName: 'settingsList', listValues: settingsList }));
      dispatch(statisticsActions.setStateStatisticsList({ statisticsList }));
    });
  };

  const onSetStateUpdateRound = (data) => {
    const { countriesList, statisticsList, updateStatisticsUpdatesListResults } = data;
    const {
      statisticsUpdatesList,
      statisticsUpdatesSettingsList,
    } = updateStatisticsUpdatesListResults;
    batch(() => {
      dispatch(dataActions.setStateDataCollection({ collectionName: 'countriesList', collectionValue: countriesList }));
      dispatch(statisticsActions.setStateStatisticsList({ statisticsList }));
      if (validationUtils.isExists(statisticsUpdatesList)) {
        dispatch(statisticsUpdatesActions.setStateStatisticsUpdatesList({ statisticsUpdatesList }));
        dispatch(statisticsUpdatesActions
          .setStateStatisticsUpdatesSettingsList({ statisticsUpdatesSettingsList }));
      }
    });
  };

  const onSetStateActionUpdate = (data) => {
    const { countriesList, settingsList } = data;
    batch(() => {
      dispatch(dataActions.setStateDataCollection({ collectionName: 'countriesList', collectionValue: countriesList }));
      dispatch(settingsActions.setStateSettingsList({ listName: 'settingsList', listValues: settingsList }));
    });
  };

  const onSetStateActionRefresh = (data) => {
    const {
      countriesList, settingsList, statisticsList, updateStatisticsUpdatesListResults,
    } = data;
    const {
      statisticsUpdatesList,
      statisticsUpdatesSettingsList,
    } = updateStatisticsUpdatesListResults;
    batch(() => {
      dispatch(dataActions.setStateDataCollection({ collectionName: 'countriesList', collectionValue: countriesList }));
      dispatch(settingsActions.setStateSettingsList({ listName: 'settingsList', listValues: settingsList }));
      dispatch(statisticsActions.setStateStatisticsList({ statisticsList }));
      if (validationUtils.isExists(statisticsUpdatesList)) {
        dispatch(statisticsUpdatesActions.setStateStatisticsUpdatesList({ statisticsUpdatesList }));
        dispatch(statisticsUpdatesActions
          .setStateStatisticsUpdatesSettingsList({ statisticsUpdatesSettingsList }));
      }
    });
  };

  const onSetStateUpdateCountryVisibility = (data) => {
    const {
      countriesList, countriesNameIdList, statisticsList, statisticsUpdatesList,
    } = data;
    batch(() => {
      dispatch(dataActions.setStateDataCollection({ collectionName: 'countriesList', collectionValue: countriesList }));
      dispatch(dataActions.setStateDataCollection({ collectionName: 'countriesNameIdList', collectionValue: countriesNameIdList }));
      dispatch(statisticsActions.setStateStatisticsList({ statisticsList }));
      if (validationUtils.isExists(statisticsUpdatesList)) {
        dispatch(statisticsUpdatesActions.setStateStatisticsUpdatesList({ statisticsUpdatesList }));
      }
    });
  };

  // Run the engine.
  useEffect(() => {
    engineService.runEngine({
      mode,
      interval: int,
      onSetStateCurrentTime,
      onSetStateSettingsList,
      onSetStateStatisticsField,
      onSetStateStatisticsList,
      onSetStateStatisticsUpdatesSettingsList,
      onSetStateInitiateSettings,
      onSetStateInitiateSources,
      onSetStateUpdateRound,
      onSetStateDataCollection,
      onSetStateActionUpdate,
      onSetStateActionRefresh,
      onSetStateUpdateCountryVisibility,
    });
    return () => {
      engineService.clearSources();
    };
  }, []);

  // Set loader for each master action.
  useEffect(() => {
    engineService.updateActionLoader(false);
  }, [countriesList]);

  // After exit from any modal - Scroll back to the element's vertical position.
  const scrollToCountry = useCallback((data) => {
    const { action, value } = data;
    if (action === 'modal' && !value && activeModalValue && !isReplaceModalMode && activeModalName !== ModalNameEnum.COUNTRY) {
      setTimeout(() => {
        const { offsetTop } = elRefs.current
          .find((c) => c.current?.dataset?.countryId === activeModalValue).current;
        if (offsetTop > window.innerHeight) {
          window.scrollTo(0, offsetTop);
        }
      }, 10);
    }
  }, [elRefs, activeModalValue, isReplaceModalMode]);

  // Update action on master modal click.
  const handleActionClick = useCallback((e) => {
    if (!isActionLoader) {
      const data = {
        action: coreUtils.getAttributeName(e, 'data-action'),
        value: coreUtils.getAttributeName(e, 'name'),
        id: coreUtils.getAttributeName(e, 'data-country-id'),
      };
      scrollToCountry(data);
      engineService.runMasterActionClick(data);
    }
  }, [elRefs, activeModalValue, isReplaceModalMode]);

  // Update action on relevant modal change.
  const handleModalActionChange = useCallback((e) => {
    engineService.runModalActionUpdate({
      modalName: coreUtils.getAttributeName(e, 'data-modal-name'),
      action: coreUtils.getAttributeName(e, 'data-action'),
      value: coreUtils.getValue(e),
    });
  }, []);

  // Validate all OK to show the data and generate the countries.
  const isInitiateComplete = !isDisplayError && validationUtils
    .isExists(countriesList) && loadingPercentage === 100;

  const renderCountries = useCallback(() => {
    const countriesDOM = [];
    const refsList = [];
    for (let i = 0; i < countriesList.length; i += 1) {
      const country = countriesList[i];
      const ref = elRefs.current[i] || createRef();
      refsList.push(ref);
      countriesDOM.push(
        (<CountryBox
          key={country.id}
          {...country} // React memo works only with separated properties.
          isRefreshMode={isRefreshMode}
          sourcesList={sourcesList}
          onActionClick={handleActionClick}
          ref={ref}
        />),
      );
    }
    elRefs.current = refsList;
    return countriesDOM;
  }, [countriesList]);

  return (
    <div className={styles.main}>
      {!isScreenLoaderComplete
        && (
        <ScreenLoader
          isActive={isActive}
          loadingList={loadingList}
          isDisplayError={isDisplayError}
        />
        )}
      {isDisplayError
        && (
        <Error
          isDisplayError={isDisplayError}
        />
        )}
      {activeModalName
        && (
        <ModalContainer
          onActionClick={handleActionClick}
          onActionChange={handleModalActionChange}
        />
        )}
      {isInitiateComplete
        && (
        <div className={styles.page}>
          <div className={styles.main_container}>
            <div className={`${styles.container} ${viewType} f32 f32-extra locations`}>
              <MasterBox
                onActionClick={handleActionClick}
              />
              {renderCountries()}
            </div>
          </div>
          <Footer />
        </div>
        )}
    </div>
  );
}
