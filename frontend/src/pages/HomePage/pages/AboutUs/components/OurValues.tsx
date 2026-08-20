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
        "We help nail techs showcase their work, build their presence, and get discovered by more clients.",
    },
    {
      icon: <AiOutlineSafety />,
      name: "Trust & Transparency",
      description:
        "We make it easier for clients to explore detailed profiles, portfolios, ratings, and reviews before connecting.",
    },
    {
      icon: <IoDiamondOutline />,
      name: "Quality",
      description:
        "We encourage nail professionals to showcase their skills, experience, and best work through professional profiles.",
    },
    {
      icon: <IoPeopleOutline />,
      name: "Community",
      description:
        "We connect clients and nail professionals while supporting a growing local nail community.",
    },
  ];

  return (
    <div className="p-5 text-slate-600 space-y-5">
      <p className="text-center text-pink-600 font-medium">OUR VALUES</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-l border-r px-5 border-slate-200"
          >
            <span className="bg-pink-100 p-2 rounded-full text-4xl text-pink-600">
              {item.icon}
            </span>

            <p className="font-bold mt-2">{item.name}</p>

            <p className="text-xs text-center mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurValues;
