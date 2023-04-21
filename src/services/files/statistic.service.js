import { SinglesListModel, StatisticsListModel } from '../../core/models';

class StatisticService {
  constructor() {
    this.singlesList = new SinglesListModel();
    this.statisticsList = new StatisticsListModel();
  }

  initiateStatisticsList() {
    return this.statisticsList;
  }

  initiateSinglesList() {
    return this.singlesList;
  }
}

export default new StatisticService();
