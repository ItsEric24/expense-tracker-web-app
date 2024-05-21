import { useState } from "react";
import { registerUser } from "../utils/request";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await registerUser({ username, email, password });
      if (userData) {
        toast.success(userData.message + " You'll be redirected to login");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("There was an error creating user");
    }
  };
  return (
    <div className="h-[100vh] flex flex-col gap-5 justify-center items-center">
      <div className="w-[40%]">
        <h1 className="text-4xl text-left font-bold">Sign Up</h1>
        <h4 className="text-gray-500 font-bold mt-3 text-xl">
          Create new account
        </h4>
      </div>
      <form className="p-10 rounded-xl w-[40%] shadow-xl bg-white flex flex-col">
        <label className="text-black text-lg" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-100 p-3 border-2 border-gray-200 rounded-md outline-none text-black"
        />
        <label className="text-black text-lg mt-5" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 p-3 border-2 border-gray-200 rounded-md outline-none text-black"
        />
        <label className="text-black text-lg mt-5" htmlFor="passowrd">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-100 p-3 border-2 border-gray-200 rounded-md outline-none text-black"
        />
        <button
          className="bg-black text-white py-2 pt-3 text-lg rounded-md mt-10"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
export default SignupPage;
