import Logo from "../../../components/Logo";
import { FaBars } from "react-icons/fa";
import { FaStreetView } from "react-icons/fa";
import avatar from "../../../assets/avatar1.png";
function DasboardHeader() {
  return (
    <>
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <Logo />
          <FaBars />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 border border-pink-600 p-2 text-pink-600 font-bold rounded">
            <button>View Public Profile</button>
            <FaStreetView className="text-pink-600 text-2xl p-1" />
          </div>
          <div className="flex items-center gap-3 border p-2 border-slate-200 rounded">
            <div className="w-12 h-12">
              <img
                className="w-full h-full object-cover rounded-full"
                src={avatar}
              />
            </div>
            <div>
              <p className="font-medium">Jessica Nails</p>
              <p className="text-sm">Nail Technician</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DasboardHeader;
