import { CiLocationOn } from "react-icons/ci";

function SearchAreaMap() {
  return (
    <>
      <div className="flex items-center justify-between border border-slate-200 p-5 rounded shadow-sm">
        <CiLocationOn className="text-pink-600 text-6xl p-2 bg-pink-100 rounded-full" />
        <div>
          <p className="font-bold">Search in this area.</p>
          <p>Showing nail techs within 15 miles of 77083</p>
        </div>
        <div>
          <button className="border border-pink-600 text-pink-600 p-2 rounded font-medium">
            Use My Location
          </button>
        </div>
      </div>
    </>
  );
}
export default SearchAreaMap;
