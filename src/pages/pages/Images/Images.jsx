import styles from './Images.module.scss';
import { Footer } from '../../../components';
import { CountrySortTypeEnum } from '../../../core/enums';
import { countryService, sortService } from '../../../services';

export default function Images() {
  const countriesList = countryService.getCountriesList(null, {
    filterOptions: null,
    sortType: sortService.sortsList[CountrySortTypeEnum.NAME],
    isReturnArray: true,
  });
  const countriesDOM = [];
  for (let i = 0; i < countriesList.length; i += 1) {
    const {
      id, displayName, upperCode2, flagClassName, bigFlagClassName, coatClassName,
      locationClassName,
    } = countriesList[i];
    countriesDOM.push(
      (
        <div key={id} className={styles.country}>
          <div className={styles.name}>
            {displayName}
            {' '}
            (
            {upperCode2}
            )
          </div>
          <div className={styles.flag32}>
            <div className="f32 f32-extra">
              <i className={`${styles.flag} flag ${flagClassName}`} />
            </div>
          </div>
          <div className={styles.flag16}>
            <div className="f16 f16-extra">
              <i className={`${styles.flag} flag ${flagClassName}`} />
            </div>
          </div>
          <div className={`${styles.locations} locations`}>
            {locationClassName && (<span className={`${styles.location} location night${locationClassName}`} />)}
          </div>
          <div className={`${styles.big_flag} ${bigFlagClassName}`} />
          <div className={`${styles.coat} ${coatClassName}`} />
        </div>
      ),
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.countries}>
        {countriesDOM}
      </div>
      <Footer />
    </div>
  );
}
