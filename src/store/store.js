import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import expenseReducer from "../features/expenses/expenseSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import chartReducer from "../features/chart/chartDataSlice";
import mainReducer from "../features/main/mainSlice";

const rootReducer = combineReducers({
  user: userReducer,
  expense: expenseReducer,
  chart: chartReducer,
  main: mainReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
