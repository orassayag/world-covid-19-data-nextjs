class CountryModel {
  constructor({
    id, date, displayName, lowerName, upperName, lowerCode2, upperCode2, lowerCode3,
    upperCode3, otherCodes, numericCode, phoneCodes, continents, areaSize, capitalName,
    independentYears, titleClassName, nameLeadingClassName, flagClassName, bigFlagClassName,
    coatClassName, locationClassName, wikipediaURL, googleMapsURL, staticPopulationCount,
    populationCountDisplay, isContainData, isActive,
  }) {
    this.id = id;
    this.displayName = displayName;
    this.lowerName = lowerName;
    this.upperName = upperName;
    this.lowerCode2 = lowerCode2;
    this.upperCode2 = upperCode2;
    this.lowerCode3 = lowerCode3;
    this.upperCode3 = upperCode3;
    this.otherCodes = otherCodes;
    this.numericCode = numericCode;
    this.phoneCodes = phoneCodes;
    this.continents = continents;
    this.areaSize = areaSize;
    this.capitalName = capitalName;
    this.independentYears = independentYears;
    this.titleClassName = titleClassName;
    this.leadingClassName = null;
    this.nameLeadingClassName = nameLeadingClassName;
    this.innerLeadingClassName = null;
    this.leadingIconName = null;
    this.flagClassName = flagClassName;
    this.bigFlagClassName = bigFlagClassName;
    this.coatClassName = coatClassName;
    this.locationClassName = locationClassName;
    this.boxClassName = null;
    this.order = null;
    this.updatesCount = null;
    this.updatesCountDisplay = null;
    this.googleMapsURL = googleMapsURL;
    this.wikipediaURL = wikipediaURL;
    this.staticPopulationCount = staticPopulationCount;
    this.dynamicPopulationCount = null;
    this.populationCount = null;
    this.populationCountDisplay = populationCountDisplay;
    this.populationPercentageDisplay = null;
    this.leadingValueDisplay = null;
    this.isActive = isActive;
    this.isVisible = null;
    this.isContainData = isContainData;
    this.isEnableRemove = null;
    this.creationDate = null;
    this.addedDate = null;
    this.addedDateDisplay = null;
    this.lastUpdateDate = null;
    this.lastUpdateDateDisplay = null;
    this.lastUpdateDateDifference = null;
    this.lastUpdateSourceName = null;
    this.sortValue = null;
    this.updatesHoursCount = null;
    this.updateSourceData = null;
    this.statisticsData = null;
    this.sourcesData = null;
    this.summaryData = null;
    // Set default values.
    this.setDefaultValues(date);
  }

  setDefaultValues(date) {
    this.leadingClassName = '';
    this.leadingIconName = '';
    this.boxClassName = '';
    this.populationCount = 0;
    this.updatesCount = 0;
    this.updatesCountDisplay = '0';
    this.isVisible = true;
    this.isEnableRemove = true;
    this.creationDate = date;
    this.addedDate = date;
    this.lastUpdateDate = null;
    this.lastUpdateDateDisplay = 'N/A';
    this.lastUpdateDateDifference = 0;
    this.updatesHoursCount = 1;
    this.statisticsData = [];
    this.sourcesData = {};
    this.summaryData = {};
  }
}

export default CountryModel;
