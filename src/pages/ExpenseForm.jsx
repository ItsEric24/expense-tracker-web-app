import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import Cookies from "universal-cookie";
import { addExpense } from "../utils/request";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainData } from "../features/main/mainSlice";
import { fetchChartData } from "../features/chart/chartDataSlice";

function ExpenseForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);
  const token = new Cookies().get("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = { name, amount, category };

    if (!name || !amount || !category) {
      toast.error("Please fill in all fields");
      return;
    }
    addExpense(token, expense);
    dispatch(fetchMainData({ token, userId }));
    dispatch(fetchChartData({ token }));
    toast.success("Expense added successfully,");
    setName("");
    setAmount("");
    setCategory("");
  };
  return (
    <div className="h-[100vh] flex flex-col gap-5 justify-center items-center relative">
      <ToastContainer />
      <div className="w-[40%]">
        <h1 className="text-4xl text-left font-bold">Add Expense</h1>
      </div>
      <form className="p-10 rounded-xl w-[40%] bg-white shadow-xl flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          required
          placeholder="name of expense"
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-100 p-3 border-2 mb-5 border-gray-200 rounded-md outline-none text-black"
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          required
          placeholder="amount"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-gray-100 p-3 border-2 mb-5 border-gray-200 rounded-md outline-none text-black"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          required
          className="text-black p-3 border-gray-200 border-2 outline-none rounded-md mb-5 bg-gray-100"
        >
          <option value="">Select category</option>
          <option value="food">Food</option>
          <option value="bills">Bills</option>
          <option value="entertainment">Entertainment</option>
          <option value="luxuries">Luxuries</option>
          <option value="income">Income</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-black text-white py-2 pt-3 text-lg rounded-md mt-5"
        >
          Add Expense
        </button>
      </form>
      <div className="p-4 flex justify-center items-center absolute top-2 left-2">
        <Link to="/dashboard" className="flex items-center gap-1">
          <KeyboardArrowLeftIcon />
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default ExpenseForm;
