class SourceModel {
  constructor({
    lowerName, upperName, officialName, apiURL, isJSON, expectedRowsCount, order,
    isActive, isCovidData,
  }) {
    this.lowerName = lowerName;
    this.upperName = upperName;
    this.officialName = officialName;
    this.apiURL = apiURL;
    this.isJSON = isJSON;
    this.expectedRowsCount = expectedRowsCount;
    this.order = order;
    this.isActive = isActive;
    this.isError = null;
    this.isSelect = null;
    this.isCovidData = isCovidData;
    // Set default values.
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.isError = false;
    this.isSelect = true;
  }
}

export default SourceModel;
