import { RxAvatar } from "react-icons/rx";
import { MdPhotoLibrary } from "react-icons/md";
import { GiFingernail } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaCrown } from "react-icons/fa6";

function NeedToSuccess() {
  const items = [
    {
      icon: <RxAvatar />,
      name: "Professional Profile",
      description:
        "Create a polished profile with your bio, experience, services, and contact information.",
    },
    {
      icon: <MdPhotoLibrary />,
      name: "Portfolio Gallery",
      description:
        "Upload your best nail work and show clients your style and creativity.",
    },
    {
      icon: <GiFingernail />,
      name: "Service Categories",
      description:
        "Show clients the nail services you offer without managing prices or bookings.",
    },
    {
      icon: <CiLocationOn />,
      name: "Local Discovery",
      description:
        "Add your location and service area so nearby clients can find you.",
    },
    {
      icon: <MdOutlineRateReview />,
      name: "Ratings & Reviews",
      description:
        "Build your reputation through customer ratings and community feedback.",
    },
    {
      icon: <MdOutlineAnalytics />,
      name: "Profile Analytics",
      description:
        "Track profile views, portfolio views, and customer contact activity.",
    },
    {
      icon: <FaCrown />,
      name: "Pro Membership",
      description:
        "Upgrade for more portfolio space, analytics, and enhanced profile features.",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="text-center">
        <p className="text-pink-600 font-medium">TOOLS FOR NAIL TECHS</p>

        <p className="font-bold text-2xl text-slate-900">
          Everything You Need to Get Discovered
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm flex flex-col items-center p-5 text-center"
          >
            <span className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-3xl">
              {item.icon}
            </span>

            <p className="font-bold mt-3">{item.name}</p>

            <p className="text-sm text-slate-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NeedToSuccess;
