import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { IoNavigateOutline } from "react-icons/io5";

function ContactProfile() {
  const items = [
    { icon: <FaPhoneAlt />, name: "(832)-597-6062" },
    { icon: <MdOutlineEmail />, name: "findmynailtech@gmail.com" },
    { icon: <FaInstagramSquare />, name: "Message on Instagram" },
    { icon: <GrSchedule />, name: "Book an Appointment" },
  ];
  return (
    <>
      <div className="p-5 shadow-sm text-slate-600 space-y-3">
        <p className="font-bold">Contact Amy</p>
        <p>Reach out directly to book an appoinment or ask questions.</p>
        <div>
          {items.map((item) => (
            <div className="flex items-center gap-2">
              <span className="text-pink-600">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 bg-pink-600 text-white p-2 rounded">
          <IoNavigateOutline className="text-2xl" />
          <button>
            <p>Contact Now</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactProfile;
