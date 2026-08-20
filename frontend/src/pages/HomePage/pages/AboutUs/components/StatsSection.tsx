import { IoIosPeople } from "react-icons/io";
import { GiFingernail } from "react-icons/gi";
import { MdPhotoLibrary } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function StatsSection() {
  const items = [
    {
      icon: <IoIosPeople />,
      number: "Free",
      title: "For Customers",
      description: "Search nail techs without an account",
    },
    {
      icon: <CiLocationOn />,
      number: "Nearby",
      title: "Location Search",
      description: "Search by ZIP code or city",
    },
    {
      icon: <MdPhotoLibrary />,
      number: "20",
      title: "Free Portfolio Photos",
      description: "Included with every free tech profile",
    },
    {
      icon: <GiFingernail />,
      number: "$9.99",
      title: "Pro Monthly",
      description: "More tools to grow your profile",
    },
  ];

  return (
    <div className="bg-pink-50 rounded shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-5 py-4 border-slate-200 lg:border-r"
          >
            <p className="text-4xl text-pink-600">{item.icon}</p>

            <p className="text-2xl font-bold mt-2">{item.number}</p>

            <p className="font-medium">{item.title}</p>

            <p className="text-sm text-slate-500 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
