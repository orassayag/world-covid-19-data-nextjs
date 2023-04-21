import styles from './Footer.module.scss';
import { creditService } from '../../../services';

export default function Footer() {
  const {
    created, creator, years, tooltip,
  } = creditService.getFooterCreatorCredits();

  return (
    <div className={styles.Footer}>
      {created}
      {' '}
      <a href={creditService.allCredits[3].link} rel="noopener noreferrer" alt={tooltip} title={tooltip} target="_blank">{creator}</a>
      ,
      {' '}
      {years}
    </div>
  );
}
