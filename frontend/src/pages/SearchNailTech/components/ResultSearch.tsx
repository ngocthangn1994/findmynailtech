import firstNailTech from "../../../assets/avatar1.png";
import secondNailTech from "../../../assets/avatar2.png";
import thirdNailTech from "../../../assets/avatar3.png";
import fourthNailTech from "../../../assets/avatar4.png";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";

function ResultSearch() {
  const result = [
    {
      photo: firstNailTech,
      name: "Army Nails",
      rate: "4.9",
      reviews: "127",
      location: "1.2",
      services: ["Acrylic", "Gel-X", "Nail Art", "Gel Manicure", "+2"],
      experience: "12",
    },
    {
      photo: secondNailTech,
      name: "Luxe Nails by Anna",
      rate: "4.2",
      reviews: "27",
      location: "3.2",
      services: ["Acrylic", "Gel-X", "Nail Art", "Gel Manicure", "+2"],
      experience: "6",
    },
    {
      photo: thirdNailTech,
      name: "Bella Nail Studio",
      rate: "4.1",
      reviews: "12",
      location: "4.4",
      services: ["Acrylic", "Gel-X", "Nail Art", "Gel Manicure", "+2"],
      experience: "5",
    },
    {
      photo: fourthNailTech,
      name: "Jenny's Nail Art",
      rate: "4.5",
      reviews: "47",
      location: "5.7",
      services: ["Acrylic", "Gel-X", "Nail Art", "Gel Manicure", "+2"],
      experience: "3",
    },
  ];
  return (
    <>
      <div className="text-slate-600">
        <div className="font-medium flex items-center gap-2">
          <p>32 nail techs found near</p>
          <p className="text-pink-600 ">77083</p>
        </div>
        <div className="grid grid-cols-1 space-y-5 mt-5">
          {result.map((item) => (
            <div className="flex items-center gap-5 space-y-2">
              <div className="w-48 h-48">
                <img
                  className="w-full h-full object-cover rounded"
                  src={item.photo}
                />
              </div>
              <div className="space-y-2">
                <p className="font-bold text-xl text-slate-900">{item.name}</p>
                <div className="flex gap-3">
                  <div>
                    <div className="text-pink-600 flex items-center gap-1 font-bold">
                      <FaStar />
                      <p>{item.rate}</p>

                      <p className="text-slate-600">({item.reviews} reviews)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLocationDot />
                    <p>{item.location} miles away</p>
                  </div>
                </div>
                <div className="text-pink-600 gap-3 flex text-sm">
                  {item.services.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>

                <div className="flex gap-3">
                  <div>
                    <div className="flex items-center gap-1 font-bold">
                      <SlCalender />
                      <p>{item.experience} years experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TbTruckDelivery />
                    <p>Mobile Service</p>
                  </div>
                </div>
              </div>
              <button className="text-pink-600 font-medium border border-pink-600 p-2 rounded">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ResultSearch;
