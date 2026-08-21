import { FaMapMarkerAlt } from "react-icons/fa";
import { LiaSearchLocationSolid } from "react-icons/lia";

function Location() {
  return (
    <>
      <div className="p-5 shadow-sm text-slate-600 space-y-3">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-pink-600" />
          <p className="font-bold">Location</p>
        </div>
        <div>
          <p>Houston, TX 77083</p>
          <p>2.1 miles away</p>
          <div className="flex items-center gap-1 text-pink-600 font-bold">
            <p>Get Directions</p>
            <LiaSearchLocationSolid className="text-3xl p-1 bg-pink-100 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
