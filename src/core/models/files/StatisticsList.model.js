class StatisticsListModel {
  constructor() {
    this.lastUpdateDate = null;
    this.lastUpdateSourceName = null;
    this.nextUpdateSourceName = null;
    this.isLastUpdateChanges = null;
    this.totalUpdatesCount = null;
    this.totalUpdateCyclesCount = null;
    this.totalVisibleCountriesCount = null;
    // Set default values.
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.isLastUpdateChanges = false;
    this.totalUpdatesCount = 0;
    this.totalUpdateCyclesCount = 0;
    this.totalVisibleCountriesCount = 0;
  }
}

export default StatisticsListModel;
