import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Types from '../../types';

const { appSizesMap } = Types;

export interface AppState {
  size: string;
  show: boolean;
}

const initialState: AppState = {
  size: appSizesMap.get('desktop').key,
  show: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showLangMenu(state, action: PayloadAction<boolean>) {
      state.show = action.payload;
    },
    setSize(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
  },
});

export default appSlice.reducer;
