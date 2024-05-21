import { useEffect } from "react";
import "./App.css";
import Header from "./Layouts/Header/Header";
import Main from "./Layouts/Main/Main";
import Rightbar from "./components/RightBar/Rightbar";
import { useDispatch } from "react-redux";
import { getExpenses } from "./features/expenses/expenseSlice";
import { expenseData } from "./utils/request";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    fetchData();

    if (!token) {
      navigate("/login");
    }
  }, [token, dispatch, navigate]);
  return (
    <div className="bg-[#FAF9F9] w-full h-[100vh]">
      <Header />
      <div className="flex gap-5 pl-5 py-4 w-full h-[86%]">
        <Main />
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
