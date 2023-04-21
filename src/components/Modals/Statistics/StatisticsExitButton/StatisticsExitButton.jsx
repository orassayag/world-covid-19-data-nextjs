export default function StatisticsExitButton({ styles, onActionClick }) {
  return (
    <button type="button" className={styles.exit} onClick={onActionClick} data-action="modal">
      <i className="fas fa-times" />
    </button>
  );
}
