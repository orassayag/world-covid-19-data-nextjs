import { useState, useEffect } from 'react';
import styles from './Icons.module.scss';
import { Footer, Icon } from '../../../components';
import { quoteService } from '../../../services';
import { validationUtils } from '../../../utils';

function IconBox({ icon }) {
  const { iconType, iconName } = quoteService.getIconType(icon);
  return (
    <div className={styles.item}>
      <Icon
        name={iconName}
        value={null}
        type={iconType}
        tooltip={null}
        tooltipDirection={null}
        iconName={null}
        isSpin={false}
      />
      <h2>{icon}</h2>
    </div>
  );
}

export default function Icons() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(quoteService.getAllIcons());
  }, []);

  const iconsDOM = [];
  if (validationUtils.isExists(list)) {
    for (let i = 0; i < list.length; i += 1) {
      iconsDOM.push(
        (<IconBox
          key={i}
          icon={list[i]}
        />),
      );
    }
  }

  return (
    <div className={styles.container_icons}>
      {iconsDOM}
      <Footer />
    </div>
  );
}
