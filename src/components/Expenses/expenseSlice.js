import { v4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    date: new Date(2022, 9, 20),
    item: "Seblak Bakar",
    price: 20000,
  },
  {
    id: 2,
    date: new Date(2022, 6, 12),
    item: "Buku",
    price: 750000,
  },
  {
    id: 3,
    date: new Date(2021, 2, 10),
    item: "Hadiah Ulang Tahun",
    price: 300000,
  },
  {
    id: 4,
    date: new Date(2020, 12, 1),
    item: "Service Motor",
    price: 20000,
  },
  {
    id: 5,
    date: new Date(2022, 4, 11),
    item: "Smart TV",
    price: 2000000,
  },
];

export const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const newExpense = {
        id: v4(),
        date: action.payload.date,
        item: action.payload.item,
        price: action.payload.price,
      };
      state.push(newExpense);
    },
  },
});

export const { addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
