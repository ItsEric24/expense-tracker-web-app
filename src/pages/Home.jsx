import hero from "./../assets/images/hero-img.png";
import Navbar from "../components/NavBar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="p-10 flex items-center h-[80vh] gap-5">
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
        </div>
        <div className="flex items-center justify-center">
          <img className="w-full" src={hero} alt="hero-img" />
        </div>
      </div>
    </>
  );
}
export default Home;
