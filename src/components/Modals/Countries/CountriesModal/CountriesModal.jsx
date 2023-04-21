import localStyles from './CountriesModal.module.scss';

export default function CountriesModal({ styles, onActionClick }) {
  const searchTypes = [
    {
      key: 'name',
      value: 'Country name',
    }, {
      key: 'code2',
      value: '2 Char code',
    }, {
      key: 'code3',
      value: '3 Char code',
    }, {
      key: 'numeric',
      value: 'Numeric code',
    }, {
      key: 'continent',
      value: 'Continent',
    },
  ].map((type) => (<option key={type.key} value={type.key}>{type.value}</option>));

  return (
    <div className={`${styles.modal_content} ${styles.countries} f32 f32-extra`}>
      <div className={styles.content}>
        <button type="button" className={styles.exit} onClick={onActionClick} data-action="modal">
          <i className="fas fa-times" />
        </button>
        <div className={localStyles.countries_container}>
          <div className={localStyles.countries_actions}>
            <div className={localStyles.icons}>
              <i className="fas fa-globe" />
              <i className="fas fa-list" />
              <i className="far fa-file" />
            </div>
            <div className={localStyles.search_country}>
              <div className={localStyles.search_country_container}>
                <input type="text" name="search-country" />
              </div>
              <div className={localStyles.search_button}>
                <button type="button" onClick={() => { }}>
                  <i className="fas fa-search" />
                </button>
              </div>
              <div className={localStyles.selector}>
                <div className={localStyles.select}>
                  <select name="select" value="name" onChange={() => { }}>
                    {searchTypes}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={localStyles.countries_list}>
            <div className={`${localStyles.country} ${localStyles.active}`}>
              <div className={localStyles.image}>
                <div>
                  <i className={`${localStyles.flag_extra} flag-extra _Donetsk`} />
                </div>
              </div>
              <div className={localStyles.code}>
                DO
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ad`} />
              </div>
              <div className={localStyles.code}>
                AD
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag us`} />
              </div>
              <div className={localStyles.code}>
                US
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag il`} />
              </div>
              <div className={localStyles.code}>
                IL
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag fr`} />
              </div>
              <div className={localStyles.code}>
                FR
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag gl`} />
              </div>
              <div className={localStyles.code}>
                GL
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ru`} />
              </div>
              <div className={localStyles.code}>
                RU
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag bz`} />
              </div>
              <div className={localStyles.code}>
                BZ
              </div>
            </div>
            <div className={`${localStyles.country} ${localStyles.active}`}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ne`} />
              </div>
              <div className={localStyles.code}>
                NE
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag lk`} />
              </div>
              <div className={localStyles.code}>
                LK
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag br`} />
              </div>
              <div className={localStyles.code}>
                BR
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ir`} />
              </div>
              <div className={localStyles.code}>
                IR
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag sr`} />
              </div>
              <div className={localStyles.code}>
                SR
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag se`} />
              </div>
              <div className={localStyles.code}>
                SE
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag sl`} />
              </div>
              <div className={localStyles.code}>
                SL
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag fi`} />
              </div>
              <div className={localStyles.code}>
                FI
              </div>
            </div>
            <div className={`${localStyles.country} ${localStyles.active}`}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag gh`} />
              </div>
              <div className={localStyles.code}>
                GH
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag nu`} />
              </div>
              <div className={localStyles.code}>
                NU
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ga`} />
              </div>
              <div className={localStyles.code}>
                GA
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag om`} />
              </div>
              <div className={localStyles.code}>
                OM
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag nr`} />
              </div>
              <div className={localStyles.code}>
                NR
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag cn`} />
              </div>
              <div className={localStyles.code}>
                CN
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag cy`} />
              </div>
              <div className={localStyles.code}>
                CY
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag am`} />
              </div>
              <div className={localStyles.code}>
                AM
              </div>
            </div>
            <div className={`${localStyles.country} ${localStyles.active}`}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ck`} />
              </div>
              <div className={localStyles.code}>
                CK
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag de`} />
              </div>
              <div className={localStyles.code}>
                DE
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ch`} />
              </div>
              <div className={localStyles.code}>
                CH
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag sv`} />
              </div>
              <div className={localStyles.code}>
                SV
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag pl`} />
              </div>
              <div className={localStyles.code}>
                PL
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag gb`} />
              </div>
              <div className={localStyles.code}>
                GB
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag gu`} />
              </div>
              <div className={localStyles.code}>
                GU
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ro`} />
              </div>
              <div className={localStyles.code}>
                RO
              </div>
            </div>
            <div className={`${localStyles.country} ${localStyles.active}`}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ca`} />
              </div>
              <div className={localStyles.code}>
                CA
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag tn`} />
              </div>
              <div className={localStyles.code}>
                TN
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag tr`} />
              </div>
              <div className={localStyles.code}>
                TR
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ci`} />
              </div>
              <div className={localStyles.code}>
                CI
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag cr`} />
              </div>
              <div className={localStyles.code}>
                CR
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag zm`} />
              </div>
              <div className={localStyles.code}>
                ZM
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ki`} />
              </div>
              <div className={localStyles.code}>
                KI
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag nq`} />
              </div>
              <div className={localStyles.code}>
                NQ
              </div>
            </div>
            <div className={`${localStyles.country} ${localStyles.active}`}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag qa`} />
              </div>
              <div className={localStyles.code}>
                QA
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag fm`} />
              </div>
              <div className={localStyles.code}>
                FM
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag ax`} />
              </div>
              <div className={localStyles.code}>
                AX
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag pa`} />
              </div>
              <div className={localStyles.code}>
                PA
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag lb`} />
              </div>
              <div className={localStyles.code}>
                LB
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag tl`} />
              </div>
              <div className={localStyles.code}>
                TL
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag gm`} />
              </div>
              <div className={localStyles.code}>
                GM
              </div>
            </div>
            <div className={localStyles.country}>
              <div className={localStyles.image}>
                <i className={`${localStyles.flag} flag hr`} />
              </div>
              <div className={localStyles.code}>
                HR
              </div>
            </div>
          </div>
          <div className={localStyles.actions}>
            <div className={localStyles.confirm_container}>
              <button type="button" className={styles.confirm} onClick={onActionClick} data-action="modal">OK</button>
            </div>
            <div className={localStyles.current_country}>
              Bonaire (Caribbean Netherlands)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
