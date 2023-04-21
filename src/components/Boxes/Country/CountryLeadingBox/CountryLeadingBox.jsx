import styles from './CountryLeadingBox.module.scss';
import { Icon } from '../../../UI';

export default function CountryLeadingBox({
  leadingClassName, innerLeadingClassName, leadingValueDisplay, leadingIconName,
}) {
  return (
    <div className={`${styles.leading_box} ${leadingClassName ? styles[leadingClassName.trim()] : ''}`}>
      {leadingValueDisplay && leadingIconName
                && (
                <div className={styles.icon}>
                  <Icon
                    name={leadingIconName}
                  />
                </div>
                )}
      <div className={styles[innerLeadingClassName.trim()]}>
        {leadingValueDisplay}
      </div>
    </div>
  );
}
