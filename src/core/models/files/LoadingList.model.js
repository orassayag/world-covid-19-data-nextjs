class LoadingListModel {
  constructor(quote) {
    this.loadingPercentage = null;
    this.loadingSourceName = null;
    this.loadingSourceOfficialName = null;
    this.loadingSourceURL = null;
    this.loadingQuote = quote;
    this.refreshSourceName = null;
    this.isScreenLoaderComplete = false;
    // Set default values.
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.loadingPercentage = 0;
    this.loadingSourceName = '';
    this.loadingSourceOfficialName = '';
    this.loadingSourceURL = '';
  }
}

export default LoadingListModel;
