import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem, IReportsData, IPlanning } from './interfaces/interfaces';
import FakeData from '../../../FakeData';

const { reports, bankAccountsData, internetAccountsData, planning } = FakeData;

export interface IHomeState {
  reportsData: IReportsData[];
  invoicesData: Array<IItem[]>;
  keyBankAccountsData: string;
  draftsData: {
    planning: IPlanning[];
    targetKeys: string[];
  };
  templatesData: IReportsData[];
  pressedLocation: string;
}

const initialState: IHomeState = {
  reportsData: reports,
  invoicesData: [bankAccountsData, internetAccountsData],
  keyBankAccountsData: '',
  draftsData: {
    planning,
    targetKeys: [],
  },
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
    setPlanningData(state, action: PayloadAction<IPlanning[]>) {
      state.draftsData.planning = action.payload;
    },
    setTargetKeys(state, action: PayloadAction<string[]>) {
      state.draftsData.targetKeys = action.payload;
    },
    setNewChallenge(state, action: PayloadAction<IPlanning>) {
      state.draftsData.planning = [...state.draftsData.planning, action.payload];
    },
    setKeyBankAccountsData(state, action: PayloadAction<string>) {
      state.keyBankAccountsData = action.payload;
    },
    setInvoice(state) {
      const key = `key#${Math.random()}`;
      state.keyBankAccountsData = key;
      state.invoicesData[0] = [
        ...state.invoicesData[0],
        {
          key,
          name: '',
          accountNumber: 900000000000000,
          address: '',
          amountFunds: '',
        },
      ];
    },
  },
});

export default homeSlice.reducer;
