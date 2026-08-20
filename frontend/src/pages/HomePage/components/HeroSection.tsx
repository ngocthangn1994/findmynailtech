import heroSection from "../../../assets/homepage_herosection.png";
import { FaShieldAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

function HeroSection() {
  const menu = [
    { icon: <FaShieldAlt />, name: "Verified professionals" },
    { icon: <CiStar />, name: "Top-rated technicians" },
    { icon: <CiLock />, name: "Secured booking" },
  ];
  return (
    <>
      <div className="w-full relative">
        <img
          className="rounded-xl w-full h-full object-contain"
          src={heroSection}
        />
        <div className="absolute inset-0 p-10 space-y-1">
          <p className="text-xs text-pink-600 font-medium">
            MOBILE NAIL TECHS NEAR YOU
          </p>
          <h1 className="text-slate-90 font-bold text-6xl">Beautiful Nails</h1>
          <h1 className="text-pink-600 text-6xl  font-bold">
            Delivered to Your Door.
          </h1>
          <p className="w-lg mt-3 text-slate-600">
            Discover trusted mobile nail technicians near you. Compare services,
            reviews and availablity, then book your appoiment in minutes.
          </p>
          <div className="grid grid-cols-2 w-md gap-5 font-medium">
            <button className="text-white bg-pink-600 rounded p-2">
              Fail a Nail Tech
            </button>
            <button className="text-pink-600 bg-white rounded p-2">
              How It Works
            </button>
          </div>
          <div className="flex items-center gap-3">
            {menu.map((item) => (
              <div className="flex items-center gap-1">
                <span className="text-pink-600">{item.icon}</span>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
