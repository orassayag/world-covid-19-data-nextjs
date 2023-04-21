import { SortModel } from '../../core/models';
import { CountrySortTypeEnum, SortDirectionEnum } from '../../core/enums';

class SortService {
  constructor() {
    this.sortsList = {
      [CountrySortTypeEnum.CASE]: new SortModel({
        sortTypeName: CountrySortTypeEnum.CASE,
        fieldsList: ['sortValue'],
        direction: SortDirectionEnum.DESCENDING,
        directionSymbol: '-',
      }),
      [CountrySortTypeEnum.CASE_PER_MILLION]: new SortModel({
        sortTypeName: CountrySortTypeEnum.CASE_PER_MILLION,
        fieldsList: ['sortValue'],
        direction: SortDirectionEnum.DESCENDING,
        directionSymbol: '-',
      }),
      [CountrySortTypeEnum.DEATH]: new SortModel({
        sortTypeName: CountrySortTypeEnum.DEATH,
        fieldsList: ['sortValue'],
        direction: SortDirectionEnum.DESCENDING,
        directionSymbol: '-',
      }),
      [CountrySortTypeEnum.DEATH_PER_MILLION]: new SortModel({
        sortTypeName: CountrySortTypeEnum.DEATH_PER_MILLION,
        fieldsList: ['sortValue'],
        direction: SortDirectionEnum.DESCENDING,
        directionSymbol: '-',
      }),
      [CountrySortTypeEnum.RECOVER]: new SortModel({
        sortTypeName: CountrySortTypeEnum.RECOVER,
        fieldsList: ['sortValue'],
        direction: SortDirectionEnum.DESCENDING,
        directionSymbol: '-',
      }),
      [CountrySortTypeEnum.RECOVER_PER_MILLION]: new SortModel({
        sortTypeName: CountrySortTypeEnum.RECOVER_PER_MILLION,
        fieldsList: ['sortValue'],
        direction: SortDirectionEnum.DESCENDING,
        directionSymbol: '-',
      }),
      [CountrySortTypeEnum.NAME]: new SortModel({
        sortTypeName: CountrySortTypeEnum.NAME,
        fieldsList: ['sortValue'],
        direction: SortDirectionEnum.ASCENDING,
        directionSymbol: '',
      }),
      [CountrySortTypeEnum.CODE]: new SortModel({
        sortTypeName: CountrySortTypeEnum.CODE,
        fieldsList: ['sortValue'],
        direction: SortDirectionEnum.ASCENDING,
        directionSymbol: '',
      }),
      [CountrySortTypeEnum.CONTINENT]: new SortModel({
        sortTypeName: CountrySortTypeEnum.CONTINENT,
        fieldsList: ['sortValue'],
        direction: SortDirectionEnum.ASCENDING,
        directionSymbol: '',
      }),
      [CountrySortTypeEnum.POPULATION]: new SortModel({
        sortTypeName: CountrySortTypeEnum.POPULATION,
        fieldsList: ['sortValue'],
        direction: SortDirectionEnum.DESCENDING,
        directionSymbol: '-',
      }),
      [CountrySortTypeEnum.ADD_TIME]: new SortModel({
        sortTypeName: CountrySortTypeEnum.ADD_TIME,
        fieldsList: ['sortValue', 'lowerName'],
        direction: SortDirectionEnum.DESCENDING,
        directionSymbol: '-',
      }),
      [CountrySortTypeEnum.UPDATES_COUNT]: new SortModel({
        sortTypeName: CountrySortTypeEnum.UPDATES_COUNT,
        fieldsList: ['sortValue', 'lowerName'],
        direction: SortDirectionEnum.DESCENDING,
        directionSymbol: '-',
      }),
      [CountrySortTypeEnum.LAST_UPDATE_TIME]: new SortModel({
        sortTypeName: CountrySortTypeEnum.LAST_UPDATE_TIME,
        fieldsList: ['sortValue', 'lowerName'],
        direction: SortDirectionEnum.DESCENDING,
        directionSymbol: '-',
      }),
    };
  }
}

export default new SortService();
