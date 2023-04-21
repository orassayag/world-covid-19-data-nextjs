import { sourcesData } from '../../data';
import { SourceSortTypeEnum } from '../../core/enums';
import { logicUtils, textUtils } from '../../utils';

class SourceService {
  constructor() {
    this.sourcesKeysList = [];
  }

  initiateSourcesList() {
    // ToDo: Check the query parameters here if relevant.
    const sourcesList = this.getSourcesList(null, {
      filterOptions: null,
      sortType: SourceSortTypeEnum.ORDER,
      isReturnArray: false,
    });
    const sourcesListValues = Object.values(sourcesList);
    for (let i = 0; i < sourcesListValues.length; i += 1) {
      this.sourcesKeysList.push(sourcesListValues[i].lowerName);
    }
    return sourcesList;
  }

  getSourcesList(sourcesList, options) {
    if (!sourcesList) {
      sourcesList = sourcesData.sourcesList;
    }
    // To array.
    sourcesList = Object.values(sourcesList);
    // Filter.
    sourcesList = this.filter(sourcesList, options);
    // Sort.
    sourcesList = this.sort(sourcesList, options);
    // Keep array.
    if (options.isReturnArray) {
      return sourcesList;
    }

    // To object.
    return textUtils.convertToObject(sourcesList, 'lowerName');
  }

  filter(sourcesList, options) {
    if (!options.filterOptions) {
      return sourcesList;
    }
    return logicUtils.filter(sourcesList, options.filterOptions);
  }

  sort(sourcesList, options) {
    if (!options.sortType) {
      return sourcesList;
    }
    return this[`${options.sortType}Sort`](sourcesList);
  }

  orderSort(sourcesList) {
    return logicUtils.sort(sourcesList, ['order']);
  }

  nameSort(sourcesList) {
    return logicUtils.sort(sourcesList, ['order']);
  }

  getRandomSource(sourcesList) {
    sourcesList = this.getSourcesList(sourcesList, {
      filterOptions: {
        isActive: [true],
        isCovidData: [true],
        isError: [false],
      },
      sortType: SourceSortTypeEnum.NAME,
      isReturnArray: true,
    });
    return sourcesList[textUtils.getRandomNumber(0, sourcesList.length)];
  }
}

export default new SourceService();
