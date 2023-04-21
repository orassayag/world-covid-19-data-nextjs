import { createSlice } from '@reduxjs/toolkit';
import { settingService } from '../../../services';

class SettingsSlices {
  constructor() {
    const initialState = {
      settingsList: settingService.initiateStateSettingsList(),
      loadingList: settingService.initiateStateLoadingList(),
    };
    this.settingsSlice = createSlice({
      name: 'settings',
      initialState,
      reducers: {
        setStateSettingsList(state, action) {
          const { listName, listValues } = action.payload;
          state[listName] = {
            ...state[listName],
            ...listValues,
          };
        },
      },
    });
  }
}

export default new SettingsSlices();
