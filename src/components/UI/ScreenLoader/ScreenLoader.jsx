import styles from './ScreenLoader.module.scss';
import { Icon } from '..';

export default function ScreenLoader({
  isActive, loadingList, isDisplayError,
}) {
  if (!isActive || !loadingList.loadingPercentage) {
    return null;
  }
  const {
    loadingPercentage, loadingSourceName, loadingSourceOfficialName, loadingSourceURL, loadingQuote,
  } = loadingList;
  const {
    quote, quoteName, quoteNameURL, categoryName, categoryIconName, categoryIconType,
  } = loadingQuote;
  const dotsDOM = [];
  for (let i = 0; i < 3; i += 1) {
    dotsDOM.push(
      (<span key={i} className={styles.loader__dot}>.</span>),
    );
  }

  return (
    <div className={`${styles.loader} ${!isDisplayError && loadingPercentage === 100 ? styles.hide : ''}`}>
      <div className={styles.container}>
        <div className={styles.title}>
          Fetching data
          {dotsDOM}
        </div>
        <div className={styles.flex_wrapper}>
          <div className={styles.single_chart}>
            <svg viewBox="0 0 36 36" className={styles.circular_chart}>
              <path
                className={styles.circle_bg}
                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={styles.circle}
                strokeDasharray={`${loadingPercentage}, 100`}
                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className={styles.percentage}>
                {loadingPercentage}
                %
              </text>
            </svg>
          </div>
        </div>
        <div className={styles.text}>
          <a href={loadingSourceURL} rel="noopener noreferrer" target="_blank">{loadingSourceName && `${`Source: ${loadingSourceName} - ${loadingSourceOfficialName}`}`}</a>
        </div>
        <div className={styles.quote}>
          <blockquote>
            {quote}
            "
            <div className={styles.bottom_quote}>
              <div className={styles.person}>
                <div className={styles.name}>
                  <a href={quoteNameURL} rel="noopener noreferrer" target="_blank">
                    -
                    {' '}
                    {quoteName}
                  </a>
                </div>
              </div>
              <div className={styles.icon_container}>
                <div className={styles.icon_image}>
                  <Icon
                    name={categoryIconName}
                    type={categoryIconType}
                  />
                </div>
                {' '}
                |
                <div className={styles.icon_name}>
                  {categoryName}
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
