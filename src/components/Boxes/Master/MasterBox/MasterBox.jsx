import { memo } from 'react';
import { useSelector } from 'react-redux';
import styles from './MasterBox.module.scss';
import MasterActionLoader from '../MasterActionLoader/MasterActionLoader';
import MasterActions from '../MasterActions/MasterActions';
import MasterHeader from '../MasterHeader/MasterHeader';
import MasterOptions from '../MasterOptions/MasterOptions';
import MasterSorts from '../MasterSorts/MasterSorts';
import MasterTimes from '../MasterTimes/MasterTimes';

const MasterBox = memo(({ onActionClick }) => {
  // State variables.
  const settingsList = useSelector((state) => state.settings.settingsList);
  const loadingList = useSelector((state) => state.settings.loadingList);
  const statisticsList = useSelector((state) => state.statistics.statisticsList);
  const {
    isActive, isLiveMode, intervalSeconds, isRecoverMode, leadingSource, viewType, colorType,
    sortType, forceSortDirection, isActionLoader,
  } = settingsList;
  const {
    lastUpdateSourceName, nextUpdateSourceName, isLastUpdateChanges, totalVisibleCountriesCount,
  } = statisticsList;
  const currentTime = useSelector((state) => state.statistics.currentTime);
  const isUpdateLoaderDisplay = useSelector((state) => state.statistics.isUpdateLoaderDisplay);
  const lastUpdateDateDisplay = useSelector((state) => state.statistics.lastUpdateDateDisplay);

  return (
    <div className={`${styles.box} ${styles.master}`}>
      {isActionLoader
                && (
                <MasterActionLoader
                  refreshSourceName={loadingList.refreshSourceName}
                />
                )}
      {!isActionLoader
                && (
                <div className={styles.settings}>
                  <MasterHeader
                    isLiveMode={isLiveMode}
                    isRecoverMode={isRecoverMode}
                    intervalSeconds={intervalSeconds}
                    currentTime={currentTime}
                    leadingSource={leadingSource}
                    lastUpdateSourceName={lastUpdateSourceName}
                    isLastUpdateChanges={isLastUpdateChanges}
                    totalVisibleCountriesCount={totalVisibleCountriesCount}
                  />
                  <MasterTimes
                    currentTime={currentTime}
                    isUpdateLoaderDisplay={isUpdateLoaderDisplay}
                    lastUpdateDateDisplay={lastUpdateDateDisplay}
                    lastUpdateSourceName={lastUpdateSourceName}
                    nextUpdateSourceName={nextUpdateSourceName}
                  />
                  <MasterSorts
                    sortTypeName={sortType.sortTypeName}
                    onActionClick={onActionClick}
                  />
                  <MasterOptions
                    viewType={viewType}
                    colorType={colorType}
                    sortDirection={forceSortDirection || sortType.direction}
                    onActionClick={onActionClick}
                  />
                  <MasterActions
                    isActive={isActive}
                    isLiveMode={isLiveMode}
                    isRecoverMode={isRecoverMode}
                    onActionClick={onActionClick}
                  />
                </div>
                )}
    </div>
  );
});

export default MasterBox;
