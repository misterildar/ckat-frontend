import { api } from '../../utils/api';
import { TuserSlice, TUser } from '../../utils/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'user/register',
  async function (body: TUser, { rejectWithValue }) {
    try {
      const res = await api.getRegister(body);
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);

      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async function (body: TUser, { rejectWithValue, dispatch }) {
    try {
      const res = await api.getLogin(body);
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(getUser());
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'user/logout',
  async function (_, { rejectWithValue }) {
    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const ubdateTokenUser = createAsyncThunk(
  'user/token',
  async function (_, { rejectWithValue }) {
    try {
      const data = await api.refreshToken();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  'user/getUser',
  async function (_, { rejectWithValue }) {
    try {
      const data = await api.getUserData();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async function (form: TUser, { rejectWithValue }) {
    try {
      const data = await api.getUpdateUserData(form);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: TuserSlice = {
  user: null,
  email: null,
  username: null,
  password: '',

  accessToken: null,
  refreshToken: null,

  isRequest: false,
  isFailed: false,

  isAuthChecked: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setAuthChecked: (state, action) => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isRequest = false;
        state.isFailed = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isFailed = false;
        state.email = action.meta.arg.email;
        state.username = action.meta.arg.username;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthChecked = true;
        state.user = true;
      })

      .addCase(loginUser.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isRequest = false;
        state.isFailed = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isFailed = false;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthChecked = true;
        state.user = true;
      })

      .addCase(logOutUser.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.isRequest = false;
        state.isFailed = action.payload;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.isRequest = false;
        state.isFailed = false;
        state.email = null;
        state.username = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
      })

      .addCase(ubdateTokenUser.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(ubdateTokenUser.rejected, (state, action) => {
        state.isRequest = false;
        state.isFailed = action.payload;
      })
      .addCase(ubdateTokenUser.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isFailed = false;
        state.email = action.payload.user.email;
        state.username = action.payload.user.username;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthChecked = true;
      })

      .addCase(getUser.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isRequest = false;
        state.isFailed = action.payload;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isFailed = false;
        state.email = action.payload.email;
        state.username = action.payload.username;
        state.isAuthChecked = true;
        state.user = true;
      })

      .addCase(updateUser.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isRequest = false;
        state.isFailed = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isFailed = false;
        state.email = action.payload.email;
        state.username = action.payload.username;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthChecked = true;
        state.user = true;
      });
  },
});

export const { setAuthChecked, setUser } = userSlice.actions;

export default userSlice.reducer;
