import { Icon } from '../../../UI';

export default function CreditsExitButton({ styles, onActionClick }) {
  return (
    <button type="button" className={styles.exit} onClick={onActionClick} data-action="modal">
      <Icon
        name="times"
      />
    </button>
  );
}
