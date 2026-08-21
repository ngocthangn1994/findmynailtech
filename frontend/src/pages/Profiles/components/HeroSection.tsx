import banner from "../../../assets/whyus.png";
import avatar from "../../../assets/avatar3.png";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { IoMdHappy } from "react-icons/io";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";

function HeroSection() {
  const services = ["Acrylic", "Gel", "Nail Art", "French", "Pedicure", "+3"];
  const items = [
    {
      icon: <RxAvatar />,
      number: "6+",
      name: "Years Experience",
    },
    {
      icon: <IoMdHappy />,
      number: "500+",
      name: "Happy Clients",
    },
    {
      icon: <FaPersonCircleCheck />,
      number: "98%",
      name: "Returning Clients",
    },
    {
      icon: <CiTimer />,
      number: "30 min",
      name: "Avg. Response Time",
    },
  ];
  return (
    <>
      <div className="relative">
        <img src={banner} />
        <div className="absolute inset-0 ml-10 w-full flex items-center gap-15">
          <div>
            <div className="flex items-center gap-5 w-64 h-64 p-1 bg-white rounded-full">
              <img
                className="w-full h-full object-cover rounded-full"
                src={avatar}
              />
            </div>
          </div>
          <div className="space-y-5">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <p className="text-4xl text-slate-700 font-bold">Amy Nails</p>
                <MdVerified className="text-2xl text-blue-600" />
              </div>
              <div className="flex items-center gap-2 font-medium">
                <FaStar className="text-yellow-400" />
                <p>4.9 (128 reviews)</p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <FaLocationDot />
                <p>2.1 miles away. Houston, TX, 77083</p>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {services.map((item) => (
                  <div className="bg-pink-100 shadow-sm text-center text-xs rounded-xl p-1 text-pink-600 font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-3">
                {items.map((item) => (
                  <div className="flex justify-center items-center gap-3 text-pink-600 bg-pink-50 p-3 rounded-full text-center shadow-sm">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-2xl">{item.number}</p>
                      <p className="text-sm">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
