import { memo } from 'react';
import styles from './MasterOptions.module.scss';
import MasterButtons from '../MasterButtons/MasterButtons';
import MasterViews from '../MasterViews/MasterViews';

const MasterOptions = memo(({
  viewType, colorType, sortDirection, onActionClick,
}) => (
  <div className={styles.options}>
    <MasterButtons
      onActionClick={onActionClick}
    />
    <MasterViews
      viewType={viewType}
      colorType={colorType}
      sortDirection={sortDirection}
      onActionClick={onActionClick}
    />
  </div>
));

export default MasterOptions;
