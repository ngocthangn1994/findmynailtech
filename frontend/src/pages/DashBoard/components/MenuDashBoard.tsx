import { FaHouseUser } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaPhotoFilm } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { TiMessageTyping } from "react-icons/ti";
import { LuCrown } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";

function MenuDashBoard() {
  const menu = [
    { icon: <FaHouseUser />, name: "Overview" },
    { icon: <RxAvatar />, name: "My Profile" },
    { icon: <IoBagCheckOutline />, name: "Services" },
    { icon: <CiLocationOn />, name: "Portfolio" },
    { icon: <FaPhotoFilm />, name: "Location & Service Area" },
    { icon: <FaStar />, name: "Reviews" },
    { icon: <GrSchedules />, name: "Appoinments" },
    { icon: <TiMessageTyping />, name: "Messages" },
    { icon: <LuCrown />, name: "Subscription" },
    { icon: <CiSettings />, name: "Settings" },
  ];
  return (
    <>
      <div className="pl-10 pt-5 space-y-7 border border-slate-200 rounded py-5 shadow-sm">
        {menu.map((item) => (
          <div className="flex items-center gap-3 ">
            <span className="text-2xl">{item.icon}</span>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default MenuDashBoard;
