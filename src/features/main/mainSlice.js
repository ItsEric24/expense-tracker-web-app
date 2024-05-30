import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTotalAmount } from "../../utils/request";

export const fetchMainData = createAsyncThunk(
  "main/fetchMainData",
  async ({ token, userId }) => {
    const categories = ["food", "bills", "entertainment", "luxuries"];
    const totalData = [];
    try {
      for (let i = 0; i < categories.length; i++) {
        const totalAmount = await getTotalAmount(token, userId, categories[i]);
        totalData.push({
          id: i + 1,
          name: categories[i].charAt(0).toUpperCase() + categories[i].slice(1),
          price: totalAmount.totalAmount,
        });
      }
      return totalData;
    } catch (error) {
      console.error("Error fetching total amount:", error);
      throw error;
    }
  }
);

const mainDataSlice = createSlice({
  name: "main",
  initialState: {
    mainData: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMainData.fulfilled, (state, action) => {
        state.mainData = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchMainData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default mainDataSlice.reducer;
