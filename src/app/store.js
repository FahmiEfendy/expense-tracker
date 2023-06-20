import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../components/Expenses/expenseSlice";
import editStateReducer from "../components/Expenses/editStateSlice";

export const store = configureStore({
  reducer: {
    expenses: expenseReducer,
    editState: editStateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
