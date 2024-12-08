import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/redux/features/auth/authApi';
import authReducer from '@/redux/features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer, // This is RTK Query's API slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
