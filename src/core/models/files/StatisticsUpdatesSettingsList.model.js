class StatisticsUpdatesSettingsListModel {
  constructor() {
    this.lastStatisticsUpdateId = null;
    this.statisticsUpdatesHoursCount = null;
    this.statisticsUpdatesCountryId = null;
    // Set default values.
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.lastStatisticsUpdateId = 1;
    this.statisticsUpdatesHoursCount = 1;
    this.statisticsUpdatesCountryId = -1;
  }
}

export default StatisticsUpdatesSettingsListModel;
