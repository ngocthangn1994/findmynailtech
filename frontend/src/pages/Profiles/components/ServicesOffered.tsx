import { RiQuillPenAiLine } from "react-icons/ri";
import { GiFingernail } from "react-icons/gi";
import { FaPagelines } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";
import { MdTipsAndUpdates } from "react-icons/md";
import { SiElectronbuilder } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { FaFill } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

function ServicesOffered() {
  const services = [
    { icon: <RiQuillPenAiLine />, name: "Acyric Nails" },
    { icon: <GiFingernail />, name: "Gel Manicure" },
    { icon: <FaPagelines />, name: "Gel-X" },
    { icon: <GiFingernail />, name: "Nail Aart" },
    { icon: <FaOpencart />, name: "Pedicure" },
    { icon: <MdTipsAndUpdates />, name: "French Tips" },
    { icon: <SiElectronbuilder />, name: "French Tips" },
    { icon: <FaPhone />, name: "French Tips" },
    { icon: <FaFill />, name: "French Tips" },
    { icon: <CiCircleMore />, name: "French Tips" },
  ];
  return (
    <>
      <div>
        <p className="font-bold">Services Offered</p>
        <div className="grid grid-cols-5 gap-3 space-y-3 mt-5">
          {services.map((item) => (
            <div className="flex flex-col items-center shadow-sm p-2 rounded">
              <span className="text-pink-600 text-2xl p-2 bg-pink-100 rounded-full">
                {item.icon}
              </span>
              <p className="font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ServicesOffered;
