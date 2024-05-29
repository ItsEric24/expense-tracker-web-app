import { useEffect } from "react";
import "./App.css";
import Header from "./Layouts/Header/Header";
import Main from "./Layouts/Main/Main";
import Rightbar from "./components/RightBar/Rightbar";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "./features/expenses/expenseSlice";
import { expenseData } from "./utils/request";
import { useNavigate } from "react-router-dom";
import { fetchChartData } from "./features/chart/chartDataSlice";
import { fetchMainData } from "./features/main/mainSlice";
import Cookies from "universal-cookie";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.user);
  const token = new Cookies().get("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const expenseResult = await expenseData(token);
          dispatch(getExpenses(expenseResult.expenses));
        }
      } catch (error) {
        console.error("Error fetching expense data:", error);
      }
    };
    dispatch(fetchChartData({ token }));
    dispatch(fetchMainData({ token, userId }));
    fetchData();

    if (!token) {
      navigate("/login");
    }
  }, [token, dispatch, navigate, userId]);
  return (
    <div className="bg-[#FAF9F9] pb-2 overflow-scroll w-full h-[100vh]">
      <Header />
      <div className="flex gap-3 px-2 py-4 h-[86%]">
        <Main />
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
