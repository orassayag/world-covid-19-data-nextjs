class LocalCountryResultModel {
  constructor(id) {
    this.id = id;
    this.source = null;
    this.addedCasesCount = null;
    this.addedDeathsCount = null;
    this.addedRecoversCount = null;
    // Set default values.
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.addedCasesCount = 0;
    this.addedDeathsCount = 0;
    this.addedRecoversCount = 0;
  }
}

export default LocalCountryResultModel;
