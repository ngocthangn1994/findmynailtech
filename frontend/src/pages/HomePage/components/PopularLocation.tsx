import { IoLocationOutline } from "react-icons/io5";

function PopularLocation() {
  const cities = [
    "Houston",
    "Katy",
    "Sugar Land",
    "Cypress",
    "Pearland",
    "Spring",
    "Richmond",
    "The Woodlands",
    "Missouri",
    "Humble",
  ];
  return (
    <>
      <div className="p-5 bg-white rounded-xl space-y-1 shadow-sm">
        <p className="text-pink-600 font-medium">POPULAR LOCATIONS</p>
        <p className="font-bold text-2xl">Find mobile nail techs near you.</p>
        <div className="grid grid-cols-4 gap-5">
          {cities.map((item) => (
            <div className="flex items-center gap-1 border border-slate-200 shadow-sm p-1 rounded">
              <IoLocationOutline className="text-pink-600" />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <button className="border border-pink-600 p-2 text-pink-600 rounded">
            View All Locations
          </button>
        </div>
      </div>
    </>
  );
}

export default PopularLocation;
