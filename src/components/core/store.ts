import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from '../modules/app/AppSlice';
import authorizationReducer from '../modules/authorization/AuthorizationSlice';
import homeReducer from '../modules/home/HomeSlice';

const rootReducer = combineReducers({
  appReducer,
  authorizationReducer,
  homeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
