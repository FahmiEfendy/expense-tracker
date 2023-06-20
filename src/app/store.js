import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../components/Expenses/expenseSlice";

export const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
