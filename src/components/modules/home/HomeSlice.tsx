import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem, IReportsData } from './interfaces/interfaces';
import FakeData from '../../../FakeData';

const { reports, bankAccountsData, internetAccountsData } = FakeData;

export interface IHomeState {
  reportsData: IReportsData[];
  invoicesData: Array<IItem[]>;
  draftsData: IReportsData[];
  templatesData: IReportsData[];
  pressedLocation: string;
}

const initialState: IHomeState = {
  reportsData: reports,
  invoicesData: [bankAccountsData, internetAccountsData],
  draftsData: reports,
  templatesData: reports,
  pressedLocation: '',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setPressedLocation(state, action: PayloadAction<string>) {
      state.pressedLocation = action.payload;
    },
    setBankAccountsData(state, action: PayloadAction<IItem[]>) {
      state.invoicesData[0] = action.payload;
    },
    setInternetAccountsData(state, action: PayloadAction<IItem[]>) {
      state.invoicesData[1] = action.payload;
    },
  },
});

export default homeSlice.reducer;
