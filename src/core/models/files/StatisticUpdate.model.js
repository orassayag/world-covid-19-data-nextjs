class StatisticUpdateModel {
  constructor({
    id, sourceName, countryId, displayName, flagClassName, cases,
    deaths, recovers, lastUpdateDate, updateClassName,
  }) {
    this.id = id;
    this.sourceName = sourceName;
    this.countryId = countryId;
    this.displayName = displayName;
    this.flagClassName = flagClassName;
    this.dataItems = [cases, deaths, recovers];
    this.lastUpdateDate = lastUpdateDate;
    this.lastUpdateDateDisplay = null;
    this.updateClassName = updateClassName;
    this.isVisible = null;
    // Set default values.
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.isVisible = true;
  }
}

export default StatisticUpdateModel;
