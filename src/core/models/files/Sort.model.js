class SortModel {
  constructor({
    sortTypeName, fieldsList, direction, directionSymbol,
  }) {
    this.sortTypeName = sortTypeName;
    this.fieldsList = fieldsList;
    this.direction = direction;
    this.directionSymbol = directionSymbol;
  }
}

export default SortModel;
