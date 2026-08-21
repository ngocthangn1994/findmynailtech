import { ImProfile } from "react-icons/im";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";

function HeaderDashBoard() {
  const headers = [
    { icon: <ImProfile />, name: "Profile Information" },
    { icon: <MdOutlinePersonAddAlt1 />, name: "About Me" },
    { icon: <FiShoppingBag />, name: "Experience & Skills" },
    { icon: <IoShareSocialOutline />, name: "Profile Information" },
    { icon: <GrContactInfo />, name: "Business Info" },
  ];
  return (
    <>
      <div className="p-5 text-slate-600 space-y-2">
        <p className="font-bold text-xl text-slate-900">My Profile</p>
        <p className="text-sm">
          Manage your personal information and professional profile.
        </p>
        <div className="grid grid-cols-5 gap-1 p-3 border border-slate-200 rounded shadow-sm">
          {headers.map((item) => (
            <div className="flex items-center gap-2">
              <span>{item.icon}</span>
              <p className="font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default HeaderDashBoard;
