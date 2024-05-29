import { logout } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { persistor } from "../../store/store";

function Logout() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    persistor.purge();
    window.location.reload();
  };
  return (
    <div className="flex absolute z-10 shadow-2xl justify-center w-40 h-[100px] top-20 bg-white right-5 items-center p-5 rounded-md">
      <button
        onClick={handleLogOut}
        className="py-2 px-3 w-full bg-black text-white text-lg rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
export default Logout;
