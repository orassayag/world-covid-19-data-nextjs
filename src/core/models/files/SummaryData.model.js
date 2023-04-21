class SummaryDataModel {
  constructor({
    cases, deaths, recovers, updates, lastUpdateTime,
  }) {
    this.itemClassName = null;
    this.dataItems = [cases, deaths, recovers, updates, lastUpdateTime];
    // Set default values.
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.itemClassName = '';
  }
}

export default SummaryDataModel;
