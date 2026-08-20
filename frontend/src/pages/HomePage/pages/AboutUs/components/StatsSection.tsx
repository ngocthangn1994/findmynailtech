import { IoIosPeople } from "react-icons/io";
import { GiFingernail } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { CiStar } from "react-icons/ci";

function StatsSection() {
  const items = [
    {
      icon: <IoIosPeople />,
      number: "10,000+",
      tite: "Happy Customer",
      description: "and growing every day",
    },
    {
      icon: <GiFingernail />,
      number: "2,500+",
      tite: "Verified Nail Techs",
      description: "accoss the U.S",
    },
    {
      icon: <SlCalender />,
      number: "25,000+",
      tite: "Appoinment Booked",
      description: "and counting",
    },
    {
      icon: <CiStar />,
      number: "4.9/5",
      tite: "Average Rating",
      description: "from our community",
    },
  ];
  return (
    <>
      <div className="bg-pink-50 rounded shadow-sm">
        <div className="flex items-center justify-between px-5 p-10">
          {items.map((item) => (
            <div className="flex flex-col items-center border-r border-l px-5 border-slate-200 space-y-1">
              <p className="text-4xl text-pink-600"> {item.icon}</p>
              <p className="text-2xl font-bold">{item.number}</p>
              <p className="font-medium">{item.tite}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StatsSection;
