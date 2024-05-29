/* eslint-disable react/prop-types */
function Card({ name, price }) {
  return (
    <div className="bg-white p-8 w-[270px] shadow-md rounded-2xl">
      <div className="flex flex-col gap-3">
        <span className="text-sm text-gray-500 flex items-center">
          <p className="flex items-center text-base font-nunito font-semibold gap-3">
            {name}
          </p>
        </span>
        <h3 className="font-bold text-xl font-nunito">KES {price || 0}</h3>
      </div>
    </div>
  );
}
export default Card;
