import styles from './StatisticsOkButton.module.scss';

export default function StatisticsOkButton({ onActionClick }) {
  return (
    <div className={styles.confirm_container}>
      <button type="button" onClick={onActionClick} data-action="modal">OK</button>
    </div>
  );
}
