class UpdateSourceDataModel {
  constructor({
    sourceName, cases, deaths, recovers,
  }) {
    this.sourceName = sourceName;
    this.dataItems = [cases, deaths, recovers];
  }
}

export default UpdateSourceDataModel;
