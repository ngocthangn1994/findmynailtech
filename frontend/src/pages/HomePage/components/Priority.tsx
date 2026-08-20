import priority from "../../../assets/priority.png";
import { FaUserCheck } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";

function Priority() {
  const items = [
    {
      icon: <FaUserCheck />,
      name: "Detailed Profiles",
      description:
        "View experience, services, location, portfolio photos, and contact information.",
    },
    {
      icon: <MdOutlinePrivacyTip />,
      name: "Privacy Matters",
      description:
        "Private account information and exact home addresses are not publicly displayed.",
    },
    {
      icon: <MdOutlineRateReview />,
      name: "Community Reviews",
      description:
        "Read ratings and feedback to help you compare nail technicians.",
    },
  ];

  return (
    <div className="shadow-sm">
      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src={priority}
          alt="FindMyNailTech customer trust"
        />

        <div className="absolute inset-0 p-10">
          <p className="text-pink-600 font-medium">YOUR TRUST MATTERS</p>

          <p className="text-2xl font-bold text-slate-900">
            Find your nail tech with more confidence.
          </p>

          <div className="grid grid-cols-3 gap-3 w-2xl mt-5">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 flex items-center shadow-sm gap-3 rounded"
              >
                <span className="text-pink-600 text-3xl">{item.icon}</span>

                <div>
                  <p className="font-bold">{item.name}</p>

                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Priority;
