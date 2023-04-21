class SinglesListModel {
  constructor() {
    this.currentTime = null;
    this.isUpdateLoaderDisplay = null;
    this.lastUpdateDateDisplay = null;
    // Set default values.
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.isUpdateLoaderDisplay = false;
  }
}

export default SinglesListModel;
