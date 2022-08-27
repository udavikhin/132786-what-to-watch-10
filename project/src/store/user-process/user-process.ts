import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../const';
import {UserProcess} from '../../types/state';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';

const initialState: UserProcess = {
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthCheckProcessing: false
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.isAuthCheckProcessing = true;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.isAuthCheckProcessing = false;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAuthCheckProcessing = false;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.error = action.error.message ?? null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
