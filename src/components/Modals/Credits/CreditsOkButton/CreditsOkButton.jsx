import styles from './CreditsOkButton.module.scss';

export default function CreditsOkButton({ onActionClick }) {
  return (
    <div className={styles.confirm_container}>
      <button type="button" onClick={onActionClick} data-action="modal">OK</button>
    </div>
  );
}
