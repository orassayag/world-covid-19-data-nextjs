import styles from './MasterButton.module.scss';

export default function MasterButton({
  buttonText, buttonName, onActionClick,
}) {
  return (
    <button type="button" className={styles.option} onClick={onActionClick} name={buttonName} data-action="modal">
      <div className={styles.title}>
        {buttonText}
      </div>
    </button>
  );
}
