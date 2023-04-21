import styles from './MasterButtons.module.scss';
import MasterButton from '../MasterButton/MasterButton';

export default function MasterButtons({ onActionClick }) {
  const buttonTexts = ['Manage Countries', 'Manage Sources'];
  const buttonNames = ['countries', 'sources'];
  const buttonsDOM = [];
  for (let i = 0; i < 2; i += 1) {
    buttonsDOM.push((
      <MasterButton
        key={i}
        buttonText={buttonTexts[i]}
        buttonName={buttonNames[i]}
        onActionClick={onActionClick}
      />
    ));
  }

  return (
    <div className={styles.buttons}>
      {buttonsDOM}
    </div>
  );
}
