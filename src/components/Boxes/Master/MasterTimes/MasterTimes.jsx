import styles from './MasterTimes.module.scss';
import MasterCurrentTime from '../MasterCurrentTime/MasterCurrentTime';
import MasterLastUpdate from '../MasterLastUpdate/MasterLastUpdate';
import MasterUpdateLoader from '../MasterUpdateLoader/MasterUpdateLoader';

export default function MasterTimes({
  currentTime, isUpdateLoaderDisplay, lastUpdateDateDisplay, lastUpdateSourceName,
  nextUpdateSourceName,
}) {
  return (
    <div className={styles.times_container}>
      <div className={styles.times}>
        <MasterCurrentTime
          currentTime={currentTime}
        />
        <MasterLastUpdate
          lastUpdateDateDisplay={lastUpdateDateDisplay}
          lastUpdateSourceName={lastUpdateSourceName}
          nextUpdateSourceName={nextUpdateSourceName}
        />
      </div>
      <div className={styles.update_loader_container}>
        <MasterUpdateLoader
          isSpin={isUpdateLoaderDisplay}
        />
      </div>
    </div>
  );
}
