import heroSearch from "../../../assets/priority.png";
import { CiLocationOn } from "react-icons/ci";
import { RiQuillPenAiLine } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdNearMe } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

function HeroSectionSearch() {
  const services = [
    "Gel-X",
    "Acrylic Nailes",
    "Nail Art",
    "Gel Manicure",
    "Pedicure",
    "Dip Powder",
    "French Tips",
  ];
  const list = [
    { name: "Where", icon: <CiLocationOn />, description: "Houston, TX 77083" },
    {
      name: "Service",
      icon: <RiQuillPenAiLine />,
      description: "Acrylic Full Set",
    },
    { name: "Date", icon: <MdDateRange />, description: "Select date" },
    { name: "Time", icon: <CiTimer />, description: "Any time" },
  ];

  const menu = [
    { icon: <MdNearMe />, name: "Near Me" },
    { icon: <MdDateRange />, name: "Available Today" },
    { icon: <FaRegStar />, name: "Top Rated" },
  ];
  return (
    <>
      <div className="relative text-slate-600">
        <img className="w-full h-full object-cover" src={heroSearch} />
        <div className="absolute inset-0 p-10 text-slate-900 space-y-2">
          <p className="font-bold text-4xl">Find nail techs near you.</p>
          <p>Discover talented independent nail technicians in your area.</p>

          <div className="grid grid-cols-5 gap-5 border border-slate-200 shadow-sm p-5 bg-pink-50 rounded-xl mt-10">
            {list.map((item) => (
              <div>
                <p className="font-bold">{item.name}</p>
                <div className="flex items-center gap-3 border border-slate-200 rounded p-2">
                  <span className="text-pink-600">{item.icon}</span>
                  <input
                    className="outline-none"
                    placeholder={item.description}
                  />
                </div>
              </div>
            ))}
            <div className="rounded text-white bg-pink-600 flex items-center gap-2 justify-center">
              <CiSearch />
              <button>Search Nail Techs</button>
            </div>
            {menu.map((item) => (
              <div className="flex items-center gap-1">
                <span className="text-pink-600">{item.icon}</span>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            {services.map((item) => (
              <p className="bg-pink-100 font-medium 0 p-2 rounded-full">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroSectionSearch;
