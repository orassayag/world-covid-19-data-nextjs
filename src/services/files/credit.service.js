import { creditsData } from '../../data';
import { CreditSortTypeEnum } from '../../core/enums';
import { logicUtils, timeUtils } from '../../utils';

class CreditService {
  constructor() {
    this.masterCredits = this.getCreditsList({
      filterOptions: {
        isMaster: [true],
      },
      sortType: CreditSortTypeEnum.ORDER,
    });
    this.allCredits = this.getCreditsList({
      filterOptions: null,
      sortType: CreditSortTypeEnum.ORDER,
    });
  }

  getCreditsList(options) {
    let { creditsList } = creditsData;
    // Filter.
    creditsList = this.filter(creditsList, options);
    // Sort.
    creditsList = this.sort(creditsList, options);
    return creditsList;
  }

  filter(creditsList, options) {
    if (!options.filterOptions) {
      return creditsList;
    }
    return logicUtils.filter(creditsList, options.filterOptions);
  }

  sort(creditsList, options) {
    if (!options.sortType) {
      return creditsList;
    }
    return this[`${options.sortType}Sort`](creditsList);
  }

  orderSort(creditsList) {
    return logicUtils.sort(creditsList, ['order']);
  }

  getFooterCreatorCredits() {
    const created = 'Created by';
    const creator = 'Or Assayag';
    const years = `2023 - ${timeUtils.getYear(timeUtils.getCurrentDate(), true)}`;
    const tooltip = `${created} ${creator}, ${years}`;
    return {
      created,
      creator,
      years,
      tooltip,
    };
  }
}

export default new CreditService();
