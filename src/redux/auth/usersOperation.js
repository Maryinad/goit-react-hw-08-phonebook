import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, register, token } from 'services/authApi';

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
