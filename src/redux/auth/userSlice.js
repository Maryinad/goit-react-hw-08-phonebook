import {
  getCurrentUserRequest,
  loginRequest,
  logOutRequest,
  registerRequest,
} from './usersOperation';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  userData: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: true,
  token: null,
};

const userSlice = createSlice({
  name: 'user',

  initialState: initialState,

  extraReducers: builder => {
    builder
      .addCase(registerRequest.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //login
      .addCase(loginRequest.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //current user
      .addCase(getCurrentUserRequest.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getCurrentUserRequest.fulfilled, (state, action) => {
        state.userData.name = action.payload.name;
        state.userData.email = action.payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUserRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isRefreshing = false;
      })
      //logout

      .addCase(logOutRequest.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logOutRequest.fulfilled, (state, action) => {
        state.userData.name = null;
        state.userData.email = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOutRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = userSlice.reducer;
