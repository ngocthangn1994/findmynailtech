import whyUs from "../../../assets/whyus.png";
import { FaMapMarkerAlt, FaStar, FaImages, FaComments } from "react-icons/fa";

function WhyUs() {
  const menu = [
    {
      icon: <FaMapMarkerAlt />,
      name: "Nail Techs Near You",
      description: "Discover nail technicians near your ZIP code or city.",
    },
    {
      icon: <FaImages />,
      name: "See Their Work",
      description: "Browse portfolio photos and find a style that matches you.",
    },
    {
      icon: <FaStar />,
      name: "Ratings & Reviews",
      description: "Compare nail techs using ratings and customer feedback.",
    },
    {
      icon: <FaComments />,
      name: "Connect Directly",
      description:
        "Contact nail techs directly to discuss pricing and appointments.",
    },
  ];

  return (
    <div className="relative">
      <img
        className="rounded w-full h-full object-cover"
        src={whyUs}
        alt="Find nail technicians near you"
      />

      <div className="absolute inset-0 p-10 space-y-3">
        <p className="text-pink-600 font-medium">
          WHY CUSTOMERS LOVE FINDMYNAILTECH
        </p>

        <p className="font-bold text-4xl text-slate-900">
          Find the right nail tech for you
        </p>

        <div className="grid grid-cols-4 w-3xl gap-3">
          {menu.map((item, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded flex flex-col items-center text-center space-y-3 shadow-sm"
            >
              <span className="text-pink-600 text-3xl">{item.icon}</span>

              <p className="font-bold">{item.name}</p>

              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
