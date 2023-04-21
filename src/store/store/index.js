import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import settings from '../../settings/settings';
import { EnvironmentModeEnum } from '../../core/enums';
import {
  dataSlices, settingsSlices, statisticsSlices, statisticsUpdatesSlices,
} from '../slices';

const { ENVIRONMENT_MODE } = settings;
const isDevelopment = process.env.NODE_ENV === 'development' || ENVIRONMENT_MODE === EnvironmentModeEnum.DEVELOPMENT;

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    data: dataSlices.dataSlice.reducer,
    settings: settingsSlices.settingsSlice.reducer,
    statistics: statisticsSlices.statisticsSlice.reducer,
    statisticsUpdates: statisticsUpdatesSlices.statisticsUpdatesSlice.reducer,
  },
  middleware: customizedMiddleware,
  devTools: isDevelopment,
});

export default store;
