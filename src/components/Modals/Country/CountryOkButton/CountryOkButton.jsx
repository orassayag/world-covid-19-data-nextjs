import styles from './CountryOkButton.module.scss';

export default function CountryOkButton({ onActionClick }) {
  return (
    <div className={styles.confirm_container}>
      <button type="button" className={styles.confirm} onClick={onActionClick} data-action="modal">OK</button>
    </div>
  );
}
