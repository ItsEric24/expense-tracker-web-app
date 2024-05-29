// chartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getChartData } from "../../utils/request";

export const fetchChartData = createAsyncThunk(
  "chart/fetchChartData",
  async ({ token }) => {
    const data = await getChartData(token);
    const chartData = new Array(7).fill(0);

    for (let i = 0; i < data.length; i++) {
      chartData[data[i]._id - 1] = data[i].total;
    }
    return chartData;
  }
);

const initialState = {
  chartData: [],
  status: "idle",
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChartData.fulfilled, (state, action) => {
        state.chartData = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchChartData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default chartSlice.reducer;
