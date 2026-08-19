import nailtech from "../../../assets/nailtech.png";
import { FaCheckCircle } from "react-icons/fa";

function NailTechnician() {
  const menu = [
    "Create your professional profile",
    "Set your own services and prices",
    "Choose your availablity",
    "Set your travel area",
    "Receive customer bookings",
    "Build reviews and your reputation",
  ];
  return (
    <>
      <div>
        <div className="relative">
          <img className="w-full h-full object-cover" src={nailtech} />
          <div className="absolute  inset-0 p-10 w-md">
            <p className="text-pink-600 font-medium">FOR NAIL TECHNICIANS</p>
            <p className="text-3xl text-slate-900 font-bold">
              Grow your nail business on your terms
            </p>
            <p>
              Join thousands of nail techs who are growing their business with
              findMyNailTech.
            </p>
            <div className="space-y-3 mt-2">
              {menu.map((item) => (
                <div className="flex gap-1 items-center">
                  <FaCheckCircle className="text-pink-600" />
                  {item}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <button className="text-white bg-pink-600 p-2 rounded font-medium shadow-sm">
                Become a Nail Tech
              </button>
              <button className="text-slate-600 bg-white border border-pink-600 p-2 rounded font-medium shadow-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NailTechnician;
