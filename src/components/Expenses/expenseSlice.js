import { v4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    date: new Date(2023, 9, 20),
    item: "Makan Siang",
    price: 50000,
  },
  {
    id: 2,
    date: new Date(2022, 6, 12),
    item: "Dekorasi Rumah",
    price: 750000,
  },
  {
    id: 3,
    date: new Date(2022, 2, 10),
    item: "Hadiah Ulang Tahun",
    price: 375000,
  },
  {
    id: 4,
    date: new Date(2021, 11, 1),
    item: "Meja Belajar",
    price: 855000,
  },
  {
    id: 5,
    date: new Date(2021, 4, 11),
    item: "Smart TV",
    price: 4500000,
  },
  {
    id: 6,
    date: new Date(2021, 7, 23),
    item: "Pakaian",
    price: 400000,
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
    deleteExpense: (state, action) => {
      return state.filter((expense) => expense.id !== action.payload.id);
    },
    editExpense: (state, action) => {
      return state.map((expense) => {
        if (expense.id === action.payload.id) {
          return {
            id: action.payload.id,
            date: action.payload.date,
            item: action.payload.item,
            price: action.payload.price,
          };
        }
        return expense;
      });
    },
  },
});

export const { addExpense, deleteExpense, editExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
