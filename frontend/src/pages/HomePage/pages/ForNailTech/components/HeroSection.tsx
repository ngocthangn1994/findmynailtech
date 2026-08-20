import nailtechHero from "../../../../../assets/nailtech_hero.png";
import { LuBadgeDollarSign } from "react-icons/lu";
import { GrSchedules } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

function HeroSection() {
  const items = [
    {
      icon: <LuBadgeDollarSign />,
      name: "Set Your Own Prices",
      description: "You decide what you change.",
    },
    {
      icon: <GrSchedules />,
      name: "Choose Your Schedule",
      description: "Work when and where you want.",
    },
    {
      icon: <CiLocationOn />,
      name: "Work in Your Area",
      description: "Set your service area and travel radius.",
    },
    {
      icon: <CiStar />,
      name: "Build Your Reputation",
      description: "Get reviews and grow your client base.",
    },
  ];
  return (
    <>
      <div className="relative shadow-sm text-slate-600">
        <div>
          <img
            className="rounded w-full h-full object-cover"
            src={nailtechHero}
          />
        </div>
        <div className="absolute inset-0 p-10 w-4xl space-y-2">
          <p className="text-pink-600 font-medium">FOR NAIL TECHS</p>
          <p className="text-3xl font-bold">Grow Your Nail Business</p>
          <p className="text-3xl font-bold text-pink-600">On Your Own Terms.</p>
          <p className="w-md">
            Join thousands of independent nail technicians who are building
            successful businesses on their own schedule.
          </p>
          <div className="grid grid-cols-2 w-sm gap-3 mt-5">
            <button className="bg-pink-600 text-white p-2 rounded">
              Become a Nail Tech
            </button>
            <button className="bg-white text-pink-600 border border-pink-600 p-2 rounded">
              See How It Works
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-1">
            {items.map((item) => (
              <div className="flex items-center bg-white p-2 rounded gap-2 justify-center px-2 py-5 text-center">
                <span className="text-pink-600 bg-pink-100 rounded-full w-10 h-10 p-1 items-center flex">
                  {item.icon}
                </span>
                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
