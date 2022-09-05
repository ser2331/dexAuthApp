import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth } from './interfaces/authorizationInterface';

export interface AuthorizationState {
    arrayUsers: IAuth[];
    changeableMail: string;
    rememberMe: boolean;
    isAuth: boolean;
}

const initialState: AuthorizationState = {
    arrayUsers: [
        {
            login: 'admin@mail.ru',
            password: 'admin',
            isAdmin: true,
            sureName: 'Дуков',
            name: 'Сергей',
            lastName: 'Сергеевич',
            confirmPassword: 'admin',
            day: '19',
            month: '03',
            year: '1995',
            phone: '77589599',
            gender: 'mail',
            readOut: false,
        },
        {
            login: 'test@mail.ru',
            password: 'test',
            isAdmin: true,
            sureName: 'Дуков',
            name: 'Сергей',
            lastName: 'Сергеевич',
            confirmPassword: 'test',
            day: '19',
            month: '03',
            year: '1995',
            phone: '77589599',
            gender: 'mail',
            readOut: false,
        },
    ],
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
