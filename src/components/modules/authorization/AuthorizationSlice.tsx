import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth } from './interfaces/authorizationInterface';
import FakeData from '../../../FakeData';

const { users } = FakeData

export interface AuthorizationState {
    arrayUsers: IAuth[];
    changeableMail: string;
    rememberMe: boolean;
    isAuth: boolean;
}

const initialState: AuthorizationState = {
    arrayUsers: users,
    changeableMail: '',
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
        setNewUser(state, action: PayloadAction<IAuth>) {
            state.arrayUsers = [...state.arrayUsers, action.payload];
        },
        setChangeableMail(state, action: PayloadAction<string>) {
            state.changeableMail = action.payload;
        },
        setChangeableArray(state, action: PayloadAction<IAuth[]>) {
            state.arrayUsers = action.payload;
        },
    },
});

export default authorizationSlice.reducer;
