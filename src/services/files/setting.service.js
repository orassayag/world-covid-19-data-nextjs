import settings from '../../settings/settings';
import { LoadingListModel, SettingsListModel } from '../../core/models';
import {
  ColorTypeEnum, CountrySortTypeEnum, ComponentModeEnum, ViewTypeEnum,
} from '../../core/enums';
import quoteService from './quote.service';
import sortService from './sort.service';

class SettingService {
  constructor() {
    if (!this.isAppComponent()) {
      return;
    }
    this.loadingList = new LoadingListModel(quoteService.getRandomQuote());
    this.settingsList = new SettingsListModel({
      isActive: true,
      isLiveMode: false,
      intervalSeconds: 5,
      viewType: ViewTypeEnum.HORIZONTAL,
      colorType: ColorTypeEnum.NIGHT,
      sortType: sortService.sortsList[CountrySortTypeEnum.CASE],
    });
  }

  initiateStateSettingsList() {
    if (!this.isAppComponent()) {
      return {};
    }
    const {
      isDisplayError, isDisplayModal, activeModalName, activeModalValue,
      isReplaceModalMode, isActionLoader,
    } = this.settingsList;
    return {
      isDisplayError,
      isDisplayModal,
      activeModalName,
      activeModalValue,
      isReplaceModalMode,
      isActionLoader,
    };
  }

  initiateStateLoadingList() {
    if (!this.isAppComponent()) {
      return;
    }
    return this.loadingList;
  }

  initiateSettingsList() {
    if (!this.isAppComponent()) {
      return;
    }
    // ToDo: Active when implementing query parameters.
    // ToDo: Here check the query parameters for the settings.
    // Settings.
    return this.settingsList;
  }

  isAppComponent() {
    return settings.COMPONENT_MODE === ComponentModeEnum.APP;
  }
}

export default new SettingService();
