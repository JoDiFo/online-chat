import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch } from "@/app/redux/store";
import ChatService from "@/app/Services/ChatService";
import { IErrorResponse } from "@/entities/response/ErrorResponse";

import { IChat, IChatSlice } from "./types";

export const fetchChats = (userId: number) => async (dispatch: AppDispatch) => {
  try {
    const newChats = await ChatService.getChats(userId);
    console.log(newChats);
    dispatch(setChats(newChats.data));
  } catch (error: unknown) {
    console.log((error as IErrorResponse).response?.data?.message);
    alert((error as IErrorResponse).response?.data?.message);
  }
};

const initialState: IChatSlice = {
  selectedId: null,
  allChats: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    selectChat: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },

    deselectChat: (state) => {
      state.selectedId = null;
    },

    setChats: (state, action: PayloadAction<IChat[]>) => {
      state.allChats = action.payload;
    },
  },
});

export const { selectChat, deselectChat, setChats } = chatSlice.actions;

export default chatSlice.reducer;
