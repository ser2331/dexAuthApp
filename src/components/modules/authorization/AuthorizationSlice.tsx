import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuth } from './interfaces/authorizationInterface';
import FakeData from '../../../FakeData';

const { users } = FakeData;

export interface AuthorizationState {
  arrayUsers: IAuth[];
  currentUser: IAuth;
  changeableMail: string;
  rememberMe: boolean;
  isAuth: boolean;
  imageUrl: string;
}

const initialState: AuthorizationState = {
  arrayUsers: users,
  currentUser: {
    login: '',
    password: '',
    sureName: '',
    name: '',
    lastName: '',
    confirmPassword: '',
    day: '',
    month: '',
    year: '',
    phone: '',
    gender: '',
    readOut: false,
    isAdmin: false,
    remember: false,
    avatar: '',
  },
  changeableMail: '',
  rememberMe: false,
  isAuth: false,
  imageUrl: '',
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
    setUser(state, action: PayloadAction<IAuth>) {
      state.currentUser = action.payload;
    },
    setImageUrl(state, action: PayloadAction<string>) {
      state.imageUrl = action.payload;
    },
  },
});

export default authorizationSlice.reducer;
