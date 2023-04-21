import {
  ColorTypeEnum, CountrySortTypeEnum, SortDirectionEnum, ViewTypeEnum,
} from '../../core/enums';

class EnumService {
  constructor() {
    this.viewIconAttributeNames = [
      Object.values(ViewTypeEnum), Object.values(ColorTypeEnum), Object.values(SortDirectionEnum),
    ];
    this.countrySortTypeValues = Object.values(CountrySortTypeEnum);
  }
}

export default new EnumService();
