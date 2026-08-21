import login from "../../../../assets/login.png";
import Logo from "../../../../components/Logo";
import { FaShieldAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

function LeftSide() {
  const menu = [
    { icon: <FaShieldAlt />, name: "Verified Nail Techs" },
    { icon: <CiLocationOn />, name: "Search by Location" },
    { icon: <CiStar />, name: "Real Reviews" },
    { icon: <CiHeart />, name: "Easy & Free to use" },
  ];
  return (
    <>
      <div className="relative text-slate-600 space-y-3 w-full min-h-[720px] overflow-hidden">
        <img className="w-full h-full object-cover" src={login} />
        <div className="absolute inset-0 p-10">
          <Logo />
          <div className="font-bold text-3xl">
            <p>Find Your Perfect</p>
            <div className="flex items-center gap-2">
              <p className="text-pink-600">Nail Tech</p>
              <p>Nearby</p>
            </div>
          </div>
          <p className="w-xs mt-3">
            Discover talented, independent nail technicians in your area.
          </p>

          <div className="space-y-3 mt-10">
            {menu.map((item) => (
              <div className="flex items-center gap-3">
                <span className="text-xl text-pink-600">{item.icon}</span>
                <p className="font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSide;
