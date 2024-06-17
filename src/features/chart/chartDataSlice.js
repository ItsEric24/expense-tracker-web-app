// chartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getChartData } from "../../utils/request";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const fetchChartData = createAsyncThunk(
  "chart/fetchChartData",
  async ({ token }) => {
    const data = await getChartData(token);

    const chartData = Array.from({ length: 12 }, (v, i) => ({
      label: `${monthNames[i]}`,
      total: 0,
    }));

    data.forEach((item) => {
      const index = item.month - 1;
      chartData[index].total = item.total;
    });

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
