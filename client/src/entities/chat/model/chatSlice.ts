import { IChatSlice } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IChatSlice = {
  selectedId: null,
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
  },
});

export const { selectChat, deselectChat } = chatSlice.actions;

export default chatSlice.reducer;
