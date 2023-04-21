import { memo } from 'react';
import styles from './MasterSorts.module.scss';
import { ButtonIcon } from '../../../UI';
import { enumService } from '../../../../services';

const MasterSorts = memo(({ sortTypeName, onActionClick }) => {
  const sortIconNames = ['virus', 'viruses', 'skull-crossbones', 'skull', 'heart', 'shield-virus', 'font', 'trademark', 'images', 'users', 'adjust', 'sync-alt', 'hourglass-half'];
  const sortIconTooltips = ['Cases', 'Cases per million', 'Deaths', 'Deaths per million', 'Recovers', 'Recovers per million', 'Country name', 'Country code', 'Continent',
    'Country population', 'Add time', 'Updates count', 'Last update time'];
  const iconsDOM = [];
  for (let i = 0; i < 13; i += 1) {
    const sortIconAttributeName = enumService.countrySortTypeValues[i];
    iconsDOM.push((
      <ButtonIcon
        key={i}
        className="sorts"
        name={sortIconNames[i]}
        value={sortIconAttributeName === sortTypeName ? 'on' : ''}
        action="sort"
        tooltip={sortIconTooltips[i]}
        iconName={sortIconAttributeName}
        onClick={onActionClick}
      />
    ));
  }

  return (
    <div className={styles.sorts}>
      <div className={styles.inner}>
        <div className={styles.title}>
          Sort:
        </div>
        <div className={styles.icons}>
          {iconsDOM}
        </div>
      </div>
    </div>
  );
});

export default MasterSorts;
