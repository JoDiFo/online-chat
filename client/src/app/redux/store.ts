import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/entities/user";
import { chatReducer } from "@/entities/chat";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
