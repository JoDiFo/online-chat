import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/redux/store";

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.chat,
);

export const selectChatId = createSelector(
  selectBase,
  (state) => state.selectedId,
);

export const selectChats = createSelector(
  selectBase,
  (state) => state.allChats,
);
