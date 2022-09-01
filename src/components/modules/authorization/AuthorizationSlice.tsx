import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth, IRegistration } from './interfaces/authorizationInterface';

export interface AuthorizationState {
    arrayUsers: IAuth[];
    rememberMe: boolean;
    isAuth: boolean;
}

const initialState: AuthorizationState = {
    arrayUsers: [
        { login: 'admin', password: 'admin', isAdmin: true },
        { login: 'test', password: 'test', isAdmin: false },
    ],
    rememberMe: false,
    isAuth: false,
};

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
        setNewUser(state, action: PayloadAction<IRegistration>) {
            state.arrayUsers = [...state.arrayUsers, action.payload];
        },
    },
});

export default authorizationSlice.reducer;
