import { createSlice } from '@reduxjs/toolkit';
import { statisticService } from '../../../services';

class StatisticsSlices {
  constructor() {
    const initialState = {
      ...statisticService.initiateSinglesList(),
      statisticsList: [],
    };
    this.statisticsSlice = createSlice({
      name: 'statistics',
      initialState,
      reducers: {
        setStateStatisticsList(state, action) {
          state.statisticsList = {
            ...state.statisticsList,
            ...action.payload.statisticsList,
          };
        },
        setStateCurrentTime(state, action) {
          const { currentTime, lastUpdateDateDisplay } = action.payload.data;
          state.currentTime = currentTime;
          state.lastUpdateDateDisplay = lastUpdateDateDisplay;
        },
        setStateStatisticsField(state, action) {
          const { fieldName, fieldValue } = action.payload;
          state[fieldName] = fieldValue;
        },
      },
    });
  }
}

export default new StatisticsSlices();
