import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReportsData } from './interfaces/interfaces';
import FakeData from '../../../FakeData';

const { reports } = FakeData;
export interface IHomeState {
    reportsData: IReportsData[];
    invoicesData: IReportsData[];
    draftsData: IReportsData[];
    templatesData: IReportsData[];
    pressedLocation: string;
}

const initialState: IHomeState = {
    reportsData: reports,
    invoicesData: reports,
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
    },
});

export default homeSlice.reducer;
