import { IoPeopleOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

function OurValues() {
  const items = [
    {
      icon: <CiHeart />,
      name: "Empowerment",
      description:
        "We empower nail techs to take control of their time, their pricing, and their future.",
    },
    {
      icon: <AiOutlineSafety />,
      name: "Trust & Safety",
      description:
        "We prioritize verified professionals, secure bookings, and a safe experience for everyone.",
    },
    {
      icon: <IoDiamondOutline />,
      name: "Quality",
      description:
        "We are committed to elevating the standard of mobile nail services.",
    },
    {
      icon: <IoPeopleOutline />,
      name: "Community",
      description:
        "We bring together a community that supports, uplifts, and celebrates each other.",
    },
  ];
  return (
    <>
      <div className="p-5 text-slate-600 space-y-5">
        <p className="text-center text-pink-600 font-medium">OUR VALUES</p>
        <div className="grid grid-cols-4 gap-3">
          {items.map((item) => (
            <div className="flex flex-col items-center border-l border-r px-5 border-slate-200">
              <span className="bg-pink-100 p-2 rounded-full text-4xl text-pink-600">
                {item.icon}
              </span>
              <p className="font-bold">{item.name}</p>
              <p className="text-xs text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurValues;
