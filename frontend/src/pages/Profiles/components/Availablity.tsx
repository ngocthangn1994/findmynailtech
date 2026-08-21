import { BiCheckCircle } from "react-icons/bi";

function Availability() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <>
      <div className="p-5 shadow-sm space-y-3 text-slate-600">
        <p className="font-bold">Availability</p>
        <div className="flex items-center text-green-600 gap-2">
          <BiCheckCircle />
          <p>Currently accepting new clients</p>
        </div>
        <div className="flex gap-3 ">
          {days.map((day) => (
            <p className="px-2 py-1 bg-slate-100 rounded-xl font-medium shadow-sm">
              {day}
            </p>
          ))}
        </div>
        <div>
          <p>Preferred time</p>
          <p className="font-medium">Morning - Afternoon</p>
        </div>
      </div>
    </>
  );
}

export default Availability;
