import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthorizationState {
    showMobileMenu: boolean;
}

const initialState: AuthorizationState = {
    showMobileMenu: false,
};

export const AuthorizationSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        // setShowMobileMenu(state, action: PayloadAction<boolean>) {
        //     state.showMobileMenu = action.payload;
        // },
    }

});

export default AuthorizationSlice.reducer;