import localStyles from './SourcesModal.module.scss';

export default function SourcesModal({ styles, onActionClick }) {
  const times = [
    {
      key: 30,
      value: '30sec',
    }, {
      key: 60,
      value: '1min',
    }, {
      key: 120,
      value: '2min',
    }, {
      key: 300,
      value: '5min',
    }, {
      key: 600,
      value: '10min',
    },
  ].map((time) => (<option key={time.key} value={time.key}>{time.value}</option>));

  return (
    <div className={`${styles.modal_content} ${styles.sources}`}>
      <div className={styles.content}>
        <button type="button" className={styles.exit} onClick={onActionClick} data-action="modal">
          <i className="fas fa-times" />
        </button>
        <div className={localStyles.sources_container}>
          <div className={localStyles.sources_select}>
            <div className={localStyles.title}>
              Active Sources
            </div>
            <div className={localStyles.sources_list}>
              <div className={`${localStyles.source} ${localStyles.active}`}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  GOO
                </div>
              </div>
              <div className={`${localStyles.source} ${localStyles.active}`}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  WOD
                </div>
              </div>
              <div className={`${localStyles.source} ${localStyles.active}`}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  CVA
                </div>
              </div>
              <div className={`${localStyles.source} ${localStyles.active}`}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  COA
                </div>
              </div>
              <div className={`${localStyles.source} ${localStyles.active}`}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  WIK
                </div>
              </div>
              <div className={`${localStyles.source} ${localStyles.active}`}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  CAC
                </div>
              </div>
              <div className={`${localStyles.source} ${localStyles.active}`}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  CVS
                </div>
              </div>
              <div className={`${localStyles.source} ${localStyles.active}`}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  CLN
                </div>
              </div>
            </div>
          </div>
          <div className={localStyles.sources_select}>
            <div className={localStyles.title}>
              Leading Source
            </div>
            <div className={localStyles.sources_list}>
              <div className={localStyles.source}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  GOO
                </div>
              </div>
              <div className={localStyles.source}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  WOD
                </div>
              </div>
              <div className={localStyles.source}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  CVA
                </div>
              </div>
              <div className={localStyles.source}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  COA
                </div>
              </div>
              <div className={localStyles.source}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  WIK
                </div>
              </div>
              <div className={localStyles.source}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  CAC
                </div>
              </div>
              <div className={`${localStyles.source} ${localStyles.active}`}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  CVS
                </div>
              </div>
              <div className={localStyles.source}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  CLN
                </div>
              </div>
            </div>
          </div>
          <div className={localStyles.sources_select}>
            <div className={localStyles.title}>
              Population Sources
            </div>
            <div className={localStyles.sources_list}>
              <div className={`${localStyles.source} ${localStyles.active}`}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  POP1
                </div>
              </div>
              <div className={`${localStyles.source} ${localStyles.active}`}>
                <div className={localStyles.image}>
                  <i className="fas fa-database" />
                </div>
                <div className={localStyles.name}>
                  POP2
                </div>
              </div>
            </div>
          </div>
          <div className={localStyles.interval_select}>
            <div className={localStyles.title}>
              Updates per:
            </div>
            <div className={localStyles.time_selector}>
              <select name="select" value="1" onChange={() => { }}>
                {times}
              </select>
            </div>
          </div>
          <div className={localStyles.confirm_container}>
            <button type="button" onClick={onActionClick} data-action="modal">OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
