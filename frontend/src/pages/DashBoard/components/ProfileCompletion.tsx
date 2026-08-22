import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function ProfileCompletion() {
  const infos = [
    "Profile Information",
    "About Me",
    "Services (5/5)",
    "Porfolio (12/12)",
    "Location & Service Area",
    "Reviews (10/10)",
  ];

  return (
    <>
      <div className="p-5 border border-slate-200 rounded shadow-sm text-slate-600 space-y-2">
        <div>
          <p className="font-bold">Profile Completion</p>
          <p className="text-sm">
            A complete profile gets more views and clients.
          </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-3">
          <div className="border border-slate-200 rounded-full text-center p-2 bg-pink-500 text-center">
            <div className="border border-white bg-white rounded-full text-center px-3 py-6">
              <p className="font-bold text-4xl">90%</p>
              <p>Complete</p>
            </div>
          </div>
          <div className="space-y-2">
            {infos.map((item) => (
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <p className="text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-pink-600 flex items-center gap-1">
          <button className=" font-medium">Complete Your Profile </button>
          <FaArrowRight />
        </div>
      </div>
    </>
  );
}
export default ProfileCompletion;
