import nailtechHero from "../../../../../assets/nailtech_hero.png";
import { FaRegUser } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
import { CiLocationOn, CiStar } from "react-icons/ci";

function HeroSection() {
  const items = [
    {
      icon: <FaRegUser />,
      name: "Create Your Profile",
      description: "Build a professional profile for your nail business.",
    },
    {
      icon: <MdPhotoLibrary />,
      name: "Show Your Work",
      description: "Upload portfolio photos and showcase your nail styles.",
    },
    {
      icon: <CiLocationOn />,
      name: "Get Discovered Nearby",
      description: "Appear in searches from customers near your location.",
    },
    {
      icon: <CiStar />,
      name: "Build Your Reputation",
      description: "Grow your visibility through your profile and reviews.",
    },
  ];

  return (
    <div className="relative shadow-sm text-slate-600">
      <div>
        <img
          className="rounded w-full h-full object-cover"
          src={nailtechHero}
          alt="Nail technician growing their business"
        />
      </div>

      <div className="absolute inset-0 p-10 w-4xl space-y-2">
        <p className="text-pink-600 font-medium">FOR NAIL TECHS</p>

        <p className="text-3xl font-bold text-slate-900">Showcase Your Work</p>

        <p className="text-3xl font-bold text-pink-600">
          Get Discovered Locally.
        </p>

        <p className="w-md">
          Create your professional nail tech profile, showcase your portfolio,
          and connect with customers searching for nail technicians near them.
        </p>

        <div className="grid grid-cols-2 w-sm gap-3 mt-5">
          <button className="bg-pink-600 text-white p-2 rounded">
            Create Your Profile
          </button>

          <button className="bg-white text-pink-600 border border-pink-600 p-2 rounded">
            View Plans
          </button>
        </div>
        <div className="grid grid-cols-4 gap-1 mt-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-1 rounded gap-2 justify-center py-2 text-center shadow-sm"
            >
              <span className="text-pink-600 bg-pink-100 rounded-full w-10 h-10 p-1 flex items-center justify-center shrink-0">
                {item.icon}
              </span>

              <div>
                <p className="font-bold text-sm">{item.name}</p>

                <p className="text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
