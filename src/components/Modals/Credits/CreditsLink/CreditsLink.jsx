import styles from './CreditsLink.module.scss';

export default function CreditsLink({
  link, title, tooltip, isLast,
}) {
  return (
    <div className={styles.link}>
      <a href={link} rel="noopener noreferrer" alt={tooltip} title={tooltip} target="_blank">{title}</a>
      {isLast ? '' : ' | '}
    </div>

  );
}
