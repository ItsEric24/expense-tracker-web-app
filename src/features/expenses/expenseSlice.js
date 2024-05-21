import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  isLoading: false,
  error: null,
};

const expensesSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getExpenses: (state, action) => {
      state.expenses = action.payload;
      state.userId = action.payload.userId;
    },
    getExpensesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteExpenses: (state, action) => {
      state.expenses = state.expenses.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const { getExpenses, getExpensesFailure, deleteExpenses } =
  expensesSlice.actions;
export default expensesSlice.reducer;
