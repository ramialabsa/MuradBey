import {createSlice} from '@reduxjs/toolkit';
import {loginUser, registerUser} from './userActions';
import {RootState} from 'state/store';

const sliceState = {
  user: {
    id: '' | undefined,
    name: '' | undefined,
    username: '' | undefined,
    password: '' | undefined,
    phonenumber: '' | undefined,
  },
  loading: false,
  accessToken: '' | undefined,
  isAuthinticated: false,
  error: '' | undefined,
};

const initialState = {
  user: {
    id: undefined,
    name: undefined,
    username: undefined,
    password: undefined,
    phonenumber: undefined,
  },
  loading: false,
  accessToken: undefined,
  isAuthinticated: false,
  error: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const {user, Authorization} = action.payload;
      state.user = user;
      state.loading = false;
      state.isAuthenticated = true;
      state.accessToken = Authorization;
    });

    builder.addCase(loginUser.pending, state => {
      state.loading = true;
      state.error = undefined;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      // @ts-ignore
      const {message} = action.payload;
      state.error = message?.ar;
      state.loading = false;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      const {user, Authorization} = action.payload;
      state.user = user;
      state.loading = false;
      state.accessToken = Authorization;
    });

    builder.addCase(registerUser.pending, state => {
      state.loading = true;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      // @ts-ignore
      const {message} = action.payload;
      state.error = message.ar;
      state.loading = false;
    });
  },
});
