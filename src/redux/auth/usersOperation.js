import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUserDetailsRequest,
  login,
  register,
  token,
  userLogOutRequest,
} from 'services/authApi';

export const registerRequest = createAsyncThunk(
  'user/register',
  async (credential, thunkApi) => {
    try {
      const response = await register(credential);
      token.set(response.token);

      console.log('response', response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginRequest = createAsyncThunk(
  'user/login',
  async (credential, thunkApi) => {
    try {
      const response = await login(credential);
      token.set(response.token);
      //   console.log('response', credential);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserRequest = createAsyncThunk(
  'user/getCurrent',
  async (_, thunkApi) => {
    try {
      const { token: savedToken } = thunkApi.getState().auth;
      if (!savedToken) return thunkApi.rejectWithValue('no token');
      token.set(savedToken);
      const response = await getUserDetailsRequest();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOutRequest = createAsyncThunk(
  'user/logOut',
  async (_, thunkApi) => {
    try {
      const response = await userLogOutRequest();
      token.unSet(response.token);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
