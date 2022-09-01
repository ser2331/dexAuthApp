import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "./interfaces/authorizationInterface";

export interface AuthorizationState {
    arrayUsers: IAuth[];
    rememberMe: boolean;
}

const initialState: AuthorizationState = {
    arrayUsers: [
        { login: "admin", password: "admin", isAdmin: true },
        { login: "test", password: "test", isAdmin: false },
    ],
    rememberMe: false,
};

export const authorizationSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        // setLogin(state, action: PayloadAction<string>) {
        //     state.login = action.payload;
        // }
    }

});

export default authorizationSlice.reducer;