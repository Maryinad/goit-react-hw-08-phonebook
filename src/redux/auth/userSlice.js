import { loginRequest, registerRequest } from './usersOperation';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  userData: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',

  initialState: initialState,

  extraReducer: builder => {
    builder
      .addCase(registerRequest.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.userData.name = action.payload.name;
        state.userData.email = action.payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
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
        state.userData.name = action.payload.name;
        state.userData.email = action.payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = userSlice.reducer;
