import localStyles from './CreditsModal.module.scss';
import CreditsExitButton from '../CreditsExitButton/CreditsExitButton';
import CreditsLink from '../CreditsLink/CreditsLink';
import CreditsOkButton from '../CreditsOkButton/CreditsOkButton';
import { creditService } from '../../../../services';

export default function CreditsModal({ styles, onActionClick }) {
  const {
    created, creator, years, tooltip,
  } = creditService.getFooterCreatorCredits();
  const creditsLinksDOM = [];
  for (let i = 0; i < creditService.allCredits.length; i += 1) {
    const {
      id, link, title, tooltip,
    } = creditService.allCredits[i];
    creditsLinksDOM.push((
      <CreditsLink
        key={id}
        link={link}
        title={title}
        tooltip={tooltip}
        isLast={i === creditService.allCredits.length - 1}
      />
    ));
  }

  return (
    <div className={`${styles.modal_content} ${styles.credits} f16 f16-extra`}>
      <div className={styles.content}>
        <CreditsExitButton
          styles={styles}
          onActionClick={onActionClick}
        />
        <div className={localStyles.credits}>
          <div className={localStyles.title}>
            Credits
          </div>
          <div className={localStyles.data}>
            {creditsLinksDOM}
          </div>
          <div className={localStyles.note}>
            <span>Please note:</span>
            {' '}
            The project is not yet finished, and not all functionality works.
            Feel free to
            {' '}
            <a href="mailto:orassayag@gmail.com">contact me</a>
            {' '}
            for any mistakes, bugs or have
            any comments or ideas to share.
          </div>
          <div className={localStyles.creator}>
            {created}
            {' '}
            <a href={creditService.allCredits[3].link} rel="noopener noreferrer" alt={tooltip} title={tooltip} target="_blank">{creator}</a>
            ,
            {' '}
            {years}
          </div>
        </div>
        <CreditsOkButton
          styles={styles}
          onActionClick={onActionClick}
        />
      </div>
    </div>
  );
}
