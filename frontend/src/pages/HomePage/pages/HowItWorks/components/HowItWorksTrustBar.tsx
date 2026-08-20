import { FaMapMarkerAlt } from "react-icons/fa";
import { GrFormSchedule } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdSystemSecurityUpdateGood } from "react-icons/md";

function HowItWorksTrustBar() {
  const items = [
    {
      icon: <MdSystemSecurityUpdateGood />,
      name: "Verified Professionals",
      description: "All nail techs are background checked and verified.",
    },
    {
      icon: <RiSecurePaymentLine />,
      name: "Secure Booking",
      description: "Your payments and personal information are always safe.",
    },
    {
      icon: <GrFormSchedule />,
      name: "Flexible Scheduling",
      description: "Book appoinments that fit your busy schedule.",
    },
    {
      icon: <FaMapMarkerAlt />,
      name: "We Come to You",
      description: "Enjoy premium nail services from the comfort of home.",
    },
  ];
  return (
    <>
      <div className="bg-pink-50 p-10 text-slate-600">
        <div className="grid grid-cols-4 items-center gap-5">
          {items.map((item) => (
            <div className="flex items-center gap-3">
              <span className="text-5xl text-pink-600 p-3 bg-pink-200 rounded-full">
                {item.icon}
              </span>
              <div className="text-center">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HowItWorksTrustBar;
