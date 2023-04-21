class SourceDataModel {
  constructor({
    cases, deaths, recovers,
  }) {
    this.dataItems = [cases, deaths, recovers];
  }
}

export default SourceDataModel;
