import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignupResponse, LoginResponse } from '@/app/types/types';


interface AuthState {
  isAuthenticated: boolean;
  user: {
    fullName: string;
    email: string;
    username?: string;
  } | null;
  sessionID?: string; // Optional, for handling session-based login
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  sessionID: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn(state, action: PayloadAction<LoginResponse>) {
      state.isAuthenticated = true;
      state.sessionID = action.payload.data; // Save session ID from login response
    },
    userRegistered(state, action: PayloadAction<SignupResponse['data']>) {
      state.isAuthenticated = true;
      state.user = {
        fullName: action.payload.fullName,
        email: action.payload.email,
        username: action.payload.username,
      };
    },
    userLoggedOut(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.sessionID = undefined;
    },
  },
});

export const { userLoggedIn, userRegistered, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
