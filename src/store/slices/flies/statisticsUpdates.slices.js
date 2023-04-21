import { createSlice } from '@reduxjs/toolkit';
import { statisticUpdateService } from '../../../services';

class StatisticsUpdatesSlices {
  constructor() {
    const initialState = {
      statisticsUpdatesList: [],
      statisticsUpdatesSettingsList: statisticUpdateService.initiateStatisticsUpdatesSettingsList(),
    };
    this.statisticsUpdatesSlice = createSlice({
      name: 'statisticsUpdates',
      initialState,
      reducers: {
        setStateStatisticsUpdatesList(state, action) {
          state.statisticsUpdatesList = [...action.payload.statisticsUpdatesList];
        },
        setStateStatisticsUpdatesSettingsList(state, action) {
          state.statisticsUpdatesSettingsList = {
            ...state.statisticsUpdatesSettingsList,
            ...action.payload.statisticsUpdatesSettingsList,
          };
        },
      },
    });
  }
}

export default new StatisticsUpdatesSlices();
