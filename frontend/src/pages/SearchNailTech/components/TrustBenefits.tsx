import { FaShieldAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

function TrustBenefits() {
  const benefits = [
    {
      icon: <FaShieldAlt />,
      name: "Independent Pros",
      description: "All nail techs are independent business owners.",
    },
    {
      icon: <FaStar />,
      name: "Verified Reviews",
      description: "Real reviews from real clients. No fake rating.",
    },
    {
      icon: <FaPhone />,
      name: "Direct Contact",
      description: "Contact nail techs direct by phone, text, or social media.",
    },
    {
      icon: <CiHeart />,
      name: "Your Choice",
      description: "You choose who you book with and pay directly.",
    },
  ];
  return (
    <>
      <div className="space-y-3">
        <div className="grid grid-cols-4 p-5 border border-slate-200 shadow-sm">
          {benefits.map((item) => (
            <div className="flex flex-col items-center text-center space-y-1">
              <span className="text-5xl text-pink-600 p-2 bg-pink-50 rounded-full">
                {item.icon}
              </span>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-xs">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 p-5 bg-pink-50 rounded">
          <SlCalender className="text-6xl text-pink-600 p-3 bg-pink-100 rounded-full" />
          <div>
            <p className="font-bold">Can't find what you're looking for?</p>
            <p>Try adjusting your search radius or browsing all nail techs</p>
          </div>
          <button className="text-white bg-pink-600 p-2 rounded font-medium">
            View All Nail Techs
          </button>
        </div>
      </div>
    </>
  );
}
export default TrustBenefits;
