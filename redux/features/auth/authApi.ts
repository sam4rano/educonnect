import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedIn, userRegistered } from './authSlice';
import { CreateUserRequest, LoginRequest, LoginResponse, SignupResponse } from '@/app/types/types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://educonnect-c7x82qlv.b4a.run/api/v1/',
    credentials: "include" as const,
  }),
  endpoints: (builder) => ({
    register: builder.mutation<SignupResponse, CreateUserRequest>({
      query: (data) => ({
        url: 'create-user',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success) {
            dispatch(userRegistered(data.data));
          }
        } catch (error) {
          console.error('Error during registration:', error);
        }
      },
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success) {
            dispatch(userLoggedIn(data));
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
