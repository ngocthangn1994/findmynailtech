import { CiShop } from "react-icons/ci";
import { TbLicense } from "react-icons/tb";
import { FaIdBadge } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";

function BusinessInfo() {
  const items = [
    { icon: <CiShop />, name: "Amy Nails Studio", description: "" },
    {
      icon: <TbLicense />,
      name: "Licensed Nail Technician",
      description: "License # LT0093223",
    },
    {
      icon: <FaIdBadge />,
      name: "Years of Experience",
      description: "6+ years",
    },
    {
      icon: <FaLanguage />,
      name: "Languages",
      description: "English, Vietnamese",
    },
  ];
  return (
    <>
      <div className="shadow-sm rounded text-slate-600 p-5 space-y-3">
        <p className="font-bold">BUSINESS INFO</p>
        <div className="space-y-3">
          {items.map((item) => (
            <div className="flex items-center gap-5">
              <span className="text-2xl text-pink-600">{item.icon}</span>
              <div>
                <p>{item.name}</p>
                <p className="text-sm font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BusinessInfo;
