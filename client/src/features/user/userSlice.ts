import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/entities/User";
import AuthService from "@/app/Services/AuthService";
import { AppDispatch } from "@/app/redux/store";
import axios from "axios";
import { IAuthResponse } from "@/entities/response/AuthResponse";
import { API_URL } from "@/app/http";

export const loginUser =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  };

export const registerUser =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
    } catch (error: any) {
      console.log(error.response?.data?.message);
    }
  };

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    await AuthService.logout();
    localStorage.removeItem("token");
    dispatch(setAuth(false));
    dispatch(setUser({} as IUser));
  } catch (error: any) {
    console.log(error.response?.data?.message);
  }
};

export const checkAuth = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
      withCredentials: true,
    });
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    dispatch(setAuth(true));
    dispatch(setUser(response.data.user));
  } catch (error: any) {
    console.log(error.response?.data?.message);
  } finally {
    dispatch(setLoading(false));
  }
};

interface UserState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
}

const initialState: UserState = {
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setAuth, setLoading, setUser } = userSlice.actions;

export default userSlice.reducer;
