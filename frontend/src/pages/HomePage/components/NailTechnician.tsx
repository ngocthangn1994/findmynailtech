import nailtech from "../../../assets/nailtech.png";
import { FaCheckCircle } from "react-icons/fa";

function NailTechnician() {
  const menu = [
    "Create your professional profile",
    "Show the services you offer",
    "Upload your nail portfolio",
    "Add your location and service area",
    "Get discovered by nearby customers",
    "Build reviews and your reputation",
  ];

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src={nailtech}
          alt="Nail technician"
        />

        <div className="absolute inset-0 p-10 w-md">
          <p className="text-pink-600 font-medium">FOR NAIL TECHNICIANS</p>

          <p className="text-3xl text-slate-900 font-bold">
            Grow your nail business and get discovered
          </p>

          <p className="mt-2 text-slate-600">
            Create your professional profile, showcase your work, and connect
            with customers searching for nail techs near them.
          </p>

          <div className="space-y-3 mt-4">
            {menu.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <FaCheckCircle className="text-pink-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5 mt-5">
            <button className="text-white bg-pink-600 p-2 rounded font-medium shadow-sm">
              Create Your Profile
            </button>

            <button className="text-slate-600 bg-white border border-pink-600 p-2 rounded font-medium shadow-sm">
              View Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NailTechnician;
