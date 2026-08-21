import profile from "../../../assets/step3.png";
import { FaToolbox } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";

function ProfileAbout() {
  const items = [
    { icon: <FaToolbox />, name: "Clean & Sannitized Tools" },
    { icon: <MdOutlineWorkspacePremium />, name: "Premium Products" },
    { icon: <FaMobileScreen />, name: "Home Studio or Mobile" },
  ];
  return (
    <>
      <div>
        <div className="text-slate-600 grid grid-cols-2 gap-5 items-center">
          <div>
            <p className="text-xl font-bold text-slate-900">About Amy</p>
            <p className="mt-5">
              Hi! I’m Amy, a passionate nail artist with over 6 years of
              experience. I love creating beautiful, long-lasting nails that
              make you feel confident and beautiful. I use high-quality products
              and pay attention to every detail to ensure you leave happy every
              time.
            </p>
          </div>
          <div>
            <img
              className="rounded-xl w-full h-full object-cover"
              src={profile}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-5">
          {items.map((item) => (
            <div className="flex items-center gap-2 bg-slate-100 p-5 text-center justify-center rounded-2xl shadow-sm">
              <span className="text-pink-600 text-3xl">{item.icon}</span>
              <p className="font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProfileAbout;
