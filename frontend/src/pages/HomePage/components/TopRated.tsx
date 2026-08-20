import avatar1 from "../../../assets/avatar1.png";
import avatar2 from "../../../assets/avatar2.png";
import avatar3 from "../../../assets/avatar3.png";
import avatar4 from "../../../assets/avatar4.png";
import { MdStarRate } from "react-icons/md";
import { FaMapMarker } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function TopRated() {
  const menu = [
    {
      photo: avatar1,
      name: "Brian Nails",
      star: "4.5",
      location: "2.2",
      service: "Acrylics - Gel - Nail Art",
    },
    {
      photo: avatar2,
      name: "Nails by Lilly",
      star: "5.0",
      location: "1.2",
      service: "Acrylics - Nail Art - Manicure",
    },
    {
      photo: avatar3,
      name: "Cindy Bui",
      star: "5.0",
      location: "2.2",
      service: "Acrylics - Manicure - Nail Art",
    },
    {
      photo: avatar4,
      name: "Jennifer Nguyen",
      star: "4.5",
      location: "2.2",
      service: "Acrylics - Gel - Pedicure",
    },
  ];
  return (
    <>
      <div className="shadow p-5 space-y-2">
        <p className="text-pink-600 font-medium">TOP RATED</p>
        <p className="font-bold text-xl">Top Nail Techs Near You</p>
        <p>Highly rated professionals available around Houston.</p>
        <div className="grid grid-cols-4 gap-3">
          {menu.map((item) => (
            <div className="bg-white rounded">
              <div className="w-full h-48">
                <img className="w-full h-full object-cover" src={item.photo} />
              </div>
              <div className="p-2 flex flex-col items-center">
                <p className="font-bold">{item.name}</p>
                <div className="grid grid-cols-[0.4fr_1.6fr] gap-3">
                  <div className="flex items-center gap-1">
                    <MdStarRate className="text-yellow-400" />
                    <p>{item.star}</p>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarker />
                    <p>{item.location} miles</p>
                  </div>
                </div>
                <p className="text-center">{item.service}</p>
                <div className="flex items-center gap-3 text-green-600 justify-center">
                  <FaCheckCircle /> <p>Available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default TopRated;
