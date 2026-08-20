import whyUs from "../../../assets/whyus.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { FaHouse } from "react-icons/fa6";

function WhyUs() {
  const menu = [
    {
      icon: <FaMapMarkerAlt />,
      name: "Near You",
      description: "Discover professionals serving your neighborhood.",
    },
    {
      icon: <FaStar />,
      name: "Real Reviews",
      description: "See ratings from customers who actually booked.",
    },
    {
      icon: <GrSchedule />,
      name: "Flexible",
      description: "Find technicians available when you need them.",
    },
    {
      icon: <FaHouse />,
      name: "They Come to You",
      description: "Your apartment, office, hotel, or any convenient location.",
    },
  ];
  return (
    <>
      <div className="relative">
        <img className="rounded w-full h-full object-cover" src={whyUs} />
        <div className="absolute inset-0 p-10 space-y-3">
          <p className="text-pink-600 font-medium">
            WHY CUSTOMERS LOVE FINDMYNAILTECH
          </p>
          <p className="font-bold text-4xl text-slate-900">
            Beauty on your schedule
          </p>
          <div className="grid grid-cols-4 w-3xl gap-3">
            {menu.map((item) => (
              <div className="bg-white p-3 rounded flex flex-col items-center text-center space-y-3 shadow-sm">
                <span className="text-pink-600 text-3xl">{item.icon}</span>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
