import priority from "../../../assets/priority.png";
import { FaMapLocation } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";

function Priority() {
  const items = [
    {
      icon: <FaMapLocation />,
      name: "Verified Profiles",
      description: "Know who you're looking before your appoinment.",
    },
    {
      icon: <MdOutlinePayment />,
      name: "Secure Payments",
      description: "Payment information is securely processed.",
    },
    {
      icon: <MdOutlineRateReview />,
      name: "Real Reviews",
      description: "Reviews come from real appoinment.",
    },
  ];
  return (
    <>
      <div className="shadow-sm">
        <div className="relative">
          <img src={priority} />
          <div className="absolute inset-0 p-10">
            <p className="text-pink-600 font-medium">
              YOUR SAFETY OUR PRIORITY
            </p>
            <p className="text-2xl font-bold text-slate-900">
              Your beauty. Your comfort. Your peace of mind.
            </p>
            <div className="grid grid-cols-3 gap-3 w-2xl mt-5">
              {items.map((item) => (
                <div className="bg-white p-5 flex items-center shadow-sm gap-3 rounded">
                  <p className="text-pink-600 text-3xl">{item.icon}</p>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Priority;
