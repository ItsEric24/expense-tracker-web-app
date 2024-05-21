import { Link } from "react-router-dom";
import hero from "./../assets/images/hero-img.png";

function Home() {
  return (
    <div className="p-10 flex items-center h-[100vh] gap-5">
      <div className="flex flex-col gap-8">
        <h1 className="text-black text-6xl leading-tight font-extrabold">
          Take control of your finances with{" "}
          <b className="text-blue-400">Trackify</b>
        </h1>
        <p className="text-black text-xl">
          Say goodbye to financial stress and hello to financial freedom. Our
          intuitive platform makes it easy to track your expenses, manage your
          budget, and achieve your financial goals.
        </p>
        <div className="flex items-center gap-4">
          <Link
            className="py-4 px-10 bg-black text-white text-lg rounded-lg"
            to="/login"
          >
            Sign In
          </Link>
          <Link
            className="py-4 px-10 bg-black text-white text-lg rounded-lg"
            to="/register"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-full" src={hero} alt="hero-img" />
      </div>
    </div>
  );
}
export default Home;
