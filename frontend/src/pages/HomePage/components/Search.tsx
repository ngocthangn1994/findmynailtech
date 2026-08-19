import { CiLocationOn } from "react-icons/ci";
import { RiQuillPenAiLine } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdNearMe } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";

function Search() {
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
    { icon: <IoIosPricetag />, name: "Under $50" },
  ];
  return (
    <>
      <div className="grid grid-cols-5 gap-5 border border-slate-200 shadow-sm rounded p-5">
        {list.map((item) => (
          <div>
            <p className="font-bold">{item.name}</p>
            <div className="flex items-center gap-3 border border-slate-200 rounded p-2">
              <span className="text-pink-600">{item.icon}</span>
              <input className="outline-none" placeholder={item.description} />
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
    </>
  );
}
export default Search;
