import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
    showMobileMenu: boolean;
}

const initialState: AppState = {
    showMobileMenu: false,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        // setShowMobileMenu(state, action: PayloadAction<boolean>) {
        //     state.showMobileMenu = action.payload;
        // },
    }

});

export default appSlice.reducer;