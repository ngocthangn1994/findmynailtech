import banner from "../../../assets/whyus.png";
import avatar from "../../../assets/avatar1.png";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ProfileReview() {
  const services = ["Gel Manicure", "Acrylic Nails", "Nail Art"];
  return (
    <>
      <div className="p-5 shadow-sm text-slate-600 space-y-3">
        <div>
          <p className="font-medium text-slate-900">Profile Preview</p>
          <p className="text-sm">
            This is how your profile appears to customer.
          </p>
        </div>
        <div className="relative">
          <img className="w-full h-full object-cover rounded" src={banner} />
          <div className="absolute inset-0 w-18 h-18 p-1 bg-white rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src={avatar}
            />
          </div>
        </div>
        <div>
          <p className="font-bold">Jessica Nails</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <p className="text-sm">4.9 (58 reviews)</p>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-sm">Houston, TX</p>
            </div>
          </div>
          <p>Nail Technician</p>
          <div className="grid grid-cols-3 gap-3 text-center">
            {services.map((item) => (
              <p className="text-xs bg-slate-100 p-1 rounded-xl font-medium">
                {item}
              </p>
            ))}
          </div>
          <div className="mt-3">
            <p className="text-sm">
              Hi, I'm Jessica a passionate nail technician with over 6 years of
              experience. I specialize in gel manicures, acrylics, and custom
              nail art...
            </p>
            <button className="text-pink-600">View more</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-pink-600 text-white rounded p-2">
              Contact Me
            </button>
            <button className="bg-white border border-pink-600 text-pink-600 rounded p-2">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileReview;
