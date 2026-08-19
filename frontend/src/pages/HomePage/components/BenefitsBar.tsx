import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { CiShoppingTag } from "react-icons/ci";
import { FaLock } from "react-icons/fa";

function BenefitsBar() {
  const menu = [
    {
      icon: <MdOutlineSecurity />,
      name: "Verified Professionals",
      description: "Background checked for your safety and peace of mind.",
    },
    {
      icon: <TbTruckDelivery />,
      name: "Mobile Convenience",
      description:
        "Your nail tech comes to you at home, work, or whenever you are.",
    },
    {
      icon: <CiShoppingTag />,
      name: "Transparent Pricing",
      description: "See services prices before you book with no hidden fees.",
    },
    {
      icon: <FaLock />,
      name: "Secure Booking",
      description:
        "Your payments and personal information are always protected",
    },
  ];
  return (
    <>
      <div className="bg-pink-100 p-10 grid grid-cols-4 shadow-sm">
        {menu.map((item) => (
          <div className="flex gap-5 items-center">
            <span className="text-pink-600 text-6xl">{item.icon}</span>
            <div>
              <p className="font-bold">{item.name}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BenefitsBar;
