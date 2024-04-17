import { RootState } from "@/app/redux/store";
import { createSelector } from "@reduxjs/toolkit";
import { IUser } from "./types";

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.user,
);

export const selectUser = createSelector(
  selectBase,
  (state: { user: IUser }) => state.user,
);

export const selectAuth = createSelector(
  selectBase,
  (state: { isAuth: boolean }) => state.isAuth,
);

export const selectLoading = createSelector(
  selectBase,
  (state: { isLoading: boolean }) => state.isLoading,
);
