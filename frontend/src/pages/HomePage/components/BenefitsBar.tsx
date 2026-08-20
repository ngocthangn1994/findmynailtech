import { MdOutlineSecurity } from "react-icons/md";
import { FaRegImages, FaRegStar, FaRegComments } from "react-icons/fa";

function BenefitsBar() {
  const menu = [
    {
      icon: <MdOutlineSecurity />,
      name: "Trusted Profiles",
      description:
        "Browse detailed nail tech profiles with services, experience, and location.",
    },
    {
      icon: <FaRegImages />,
      name: "See Their Work",
      description:
        "Explore real portfolio photos and find a nail tech whose style matches you.",
    },
    {
      icon: <FaRegStar />,
      name: "Ratings & Reviews",
      description:
        "Compare nail technicians using ratings and customer reviews.",
    },
    {
      icon: <FaRegComments />,
      name: "Contact Directly",
      description:
        "Connect with nail technicians directly to discuss pricing and appointments.",
    },
  ];

  return (
    <div className="space-y-5">
      <p className="text-pink-600 font-bold text-center">
        WHY CHOOSE FINDMYNAILTECH
      </p>

      <div className="bg-pink-100 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 shadow-sm">
        {menu.map((item, index) => (
          <div key={index} className="flex gap-5 items-center">
            <span className="text-pink-600 text-5xl shrink-0">{item.icon}</span>

            <div>
              <p className="font-bold">{item.name}</p>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BenefitsBar;
