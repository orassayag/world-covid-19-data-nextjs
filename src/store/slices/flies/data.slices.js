import { createSlice } from '@reduxjs/toolkit';

class DataSlices {
  constructor() {
    const initialState = {
      sourcesList: [],
      countriesList: [],
      countriesNameIdList: [],
    };
    this.dataSlice = createSlice({
      name: 'data',
      initialState,
      reducers: {
        setStateDataCollection(state, action) {
          const { collectionName, collectionValue } = action.payload;
          state[collectionName] = collectionValue instanceof Array
            ? collectionValue : Object.values(collectionValue);
        },
      },
    });
  }
}

export default new DataSlices();
