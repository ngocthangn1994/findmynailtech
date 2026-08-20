import heroSection from "../../../assets/homepage_herosection.png";
import { RiKakaoTalkFill } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";

function HeroSection() {
  const menu = [
    { icon: <CiBookmarkCheck />, name: "No Booking Fees" },
    { icon: <CiStar />, name: "100% Free To Search" },
    { icon: <RiKakaoTalkFill />, name: "Contact Techs Directly" },
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
          <h1 className="text-slate-900 font-bold text-6xl">
            Find Your Perfect
          </h1>
          <div className="flex items-center gap-2 text-6xl font-bold">
            <h1 className="text-pink-600">Nail Tech</h1>
            <h1 className="text-slate-900">Nearby</h1>
          </div>
          <p className="w-lg mt-3 text-slate-600">
            Discover talented, independet nail technicians in your area. View
            their work and contact them directly
          </p>
          <div className="flex items-center gap-3">
            {menu.map((item) => (
              <div className="flex items-center gap-1">
                <span className="text-pink-600">{item.icon}</span>
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
