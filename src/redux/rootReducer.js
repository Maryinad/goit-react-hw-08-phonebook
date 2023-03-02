import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import { authReducer } from './auth/userSlice';
import { filterReducer } from './filter/filterSlice';
import { phoneReducer } from './phoneBook/phoneSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  blacklist: ['isLoading', 'error'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  phonebook: phoneReducer,
  filterData: filterReducer,
  auth: persistedReducer,
});
