import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";

function Follow() {
  const menu = [
    { icon: <FaInstagramSquare className="text-pink-600" /> },
    { icon: <AiFillTikTok /> },
    { icon: <FaFacebook className="text-blue-600" /> },
    { icon: <FaInternetExplorer /> },
  ];
  return (
    <>
      <div className="shadow-sm p-5 rounded space-y-3">
        <p className="font-bold">FOLLOW AMY</p>
        <div className="grid grid-cols-4 items-center">
          {menu.map((item) => (
            <p className="text-2xl">{item.icon}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Follow;
