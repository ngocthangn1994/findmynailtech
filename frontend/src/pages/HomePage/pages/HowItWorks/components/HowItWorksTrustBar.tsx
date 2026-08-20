import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdPhotoLibrary } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

function HowItWorksTrustBar() {
  const items = [
    {
      icon: <RxAvatar />,
      name: "Detailed Profiles",
      description:
        "Learn about each nail tech's experience, services, and business.",
    },
    {
      icon: <MdPhotoLibrary />,
      name: "Portfolio Photos",
      description:
        "Browse nail work and find a style that matches what you want.",
    },
    {
      icon: <FaMapMarkerAlt />,
      name: "Local Discovery",
      description:
        "Search by ZIP code or city to find nail technicians near you.",
    },
    {
      icon: <MdOutlineContactPhone />,
      name: "Connect Directly",
      description:
        "Reach out to nail techs directly about pricing and appointments.",
    },
  ];

  return (
    <div className="bg-pink-50 p-10 text-slate-600">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-5">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-4xl text-pink-600 p-3 bg-pink-200 rounded-full shrink-0">
              {item.icon}
            </span>

            <div>
              <p className="font-bold text-slate-900">{item.name}</p>

              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorksTrustBar;
