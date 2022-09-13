import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Types from '../../types';

const { appSizesMap } = Types;

export interface AppState {
  size: string;
  showLangMenu: boolean;
  showMobileMenu: boolean;
}

const initialState: AppState = {
  size: appSizesMap.get('desktop').key,
  showLangMenu: false,
  showMobileMenu: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowLangMenu(state, action: PayloadAction<boolean>) {
      state.showLangMenu = action.payload;
    },
    setSize(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
    setShowMobileMenu(state, action: PayloadAction<boolean>) {
      state.showMobileMenu = action.payload;
    },
  },
});

export default appSlice.reducer;
