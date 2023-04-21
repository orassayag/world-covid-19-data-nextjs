class FetchDataResultsModel {
  constructor(source) {
    this.source = source;
    this.resultData = null;
    this.updateCountryType = null;
    this.error = null;
    this.isValidRowsCount = null;
    // Set default values.
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.updateCountryType = false;
    this.isValidRowsCount = false;
  }
}

export default FetchDataResultsModel;
