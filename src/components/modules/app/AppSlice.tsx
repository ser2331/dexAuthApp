import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
    show: boolean;
}

const initialState: AppState = {
    show: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // setIsAuth(state, action: PayloadAction<boolean>) {
        //     state.isAuth = action.payload;
        // },
    }

});

export default appSlice.reducer;