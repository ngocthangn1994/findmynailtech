import { RxAvatar } from "react-icons/rx";
import { IoPricetagsOutline } from "react-icons/io5";
import { AiTwotoneSchedule } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import { FaRocketchat } from "react-icons/fa";
import { AiOutlineSecurityScan } from "react-icons/ai";

function NeedToSuccess() {
  const items = [
    {
      icon: <RxAvatar />,
      name: "Professional Profile",
      description: "Showcase your work with photo, bios, and services",
    },
    {
      icon: <IoPricetagsOutline />,
      name: "Customer Services & Prices",
      description: "Add unlimited services and set your own prices.",
    },
    {
      icon: <AiTwotoneSchedule />,
      name: "Smart Scheduling",
      description: "Manage your availability and let clients book easily",
    },
    {
      icon: <MdOutlinePayment />,
      name: "Bookings & Payments",
      description: "Receive bookings and secure payments in one place.",
    },
    {
      icon: <TbPigMoney />,
      name: "Earnings Dashboard",
      description: "Track your earnings bookings, and growth over time.",
    },
    {
      icon: <FaRocketchat />,
      name: "Client Messaging",
      description: "Chat with clients before and after their appoinment",
    },
    {
      icon: <AiOutlineSecurityScan />,
      name: "Verified & Trusted",
      description: "Get verified and build trust with more clients",
    },
  ];
  return (
    <>
      <div className="space-y-5">
        <p className="font-bold text-2xl text-center">
          Everything You Need to Succeed
        </p>
        <div className="grid grid-cols-7 gap-5">
          {items.map((item) => (
            <div className="bg-white rounded-xl shadow-sm flex flex-col items-center p-5 text-center">
              <span className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-3xl">
                {item.icon}
              </span>
              <p className="font-bold">{item.name}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default NeedToSuccess;
