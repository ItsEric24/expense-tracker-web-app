import dateFormat from "dateformat";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteExpense } from "../../utils/request";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "universal-cookie";
import { deleteExpenses } from "../../features/expenses/expenseSlice";
import { useDispatch } from "react-redux";
import { fetchMainData } from "../../features/main/mainSlice";
import { fetchChartData } from "../../features/chart/chartDataSlice";

function Rightbar() {
  const data = useSelector((state) => state.expense.expenses) || [];
  const token = new Cookies().get("token");
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);

  const handleDelete = async (id) => {
    try {
      await deleteExpense(token, id);
      dispatch(deleteExpenses(id));
      dispatch(fetchMainData({ token, userId }));
      dispatch(fetchChartData({ token }));
      toast.success("Expense deleted successfully");
    } catch (error) {
      toast.error("There was an error deleting expense");
    }
  };
  return (
    <div className="bg-white relative shadow-md pt-8 w-full h-[100%] rounded-2xl">
      <ToastContainer />
      <h2 className="text-center font-semibold font-nunito text-lg border-b pb-5 border-b-gray-200 text-gray-500">
        Your Expense History
      </h2>
      {data.length === 0 ? (
        <p className="text-center font-nunito font-normal text-gray-500 text-sm mt-3">
          You have no expenses yet, click the add button below to add expenses
        </p>
      ) : (
        <div className="flex flex-col overflow-scroll h-[500px]">
          {data.map((item) => (
            <div
              key={item._id}
              className="flex items-center px-6 py-4 justify-between border-b border-gray-200"
            >
              <div className="flex flex-col gap-1">
                <h4 className="font-nunito font-normal text-lg">{item.name}</h4>
                <p className="text-xs font-normal font-nunito text-gray-500">
                  {dateFormat(item.createdAt, "paddedShortDate")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`font-bold font-nunito text-base ${
                    item.category !== "income"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  KES {item.amount}
                </span>
                <div>
                  <DeleteIcon
                    className="text-gray-500"
                    cursor="pointer"
                    onClick={() => handleDelete(item._id)}
                    titleAccess="Delete expense"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="absolute bg-black w-[45px] h-[45px] rounded-[100%] bottom-3 right-3  flex justify-center items-center">
        <Link
          to="/add-expense"
          className="text-3xl flex justify-center items-center text-white font-bold"
        >
          <AddIcon titleAccess="Add expenses" />
        </Link>
      </div>
    </div>
  );
}
export default Rightbar;
