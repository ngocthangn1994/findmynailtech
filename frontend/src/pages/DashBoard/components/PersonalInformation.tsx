import avatar from "../../../assets/avatar1.png";
import { FaFlagUsa } from "react-icons/fa";

function PersonalInformation() {
  const infos = [
    { label: "Full Name", info: "Jessica Nguyen" },
    { label: "Display Name", info: "Jessica Nails" },
    { label: "Email Address", info: "jessica.nails@example.com" },
  ];
  return (
    <>
      <div className="p-5 space-y-5 text-slate-600">
        <p className="font-medium">Personal Information</p>
        <div className="grid grid-cols-2">
          <div>
            <div className="w-48 h-48">
              <img
                className="w-full h-full rounded-full object-cover"
                src={avatar}
              />
            </div>
            <div className="w-xs">
              <p className="font-bold">Profile Photo</p>
              <p className="text-xs">
                Upload a clear, friendly photo of yourself. JPG, PNG or WEBP,
                Max size 5MB
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="space-y-3">
              {infos.map((item) => (
                <div>
                  <label className="font-medium">{item.label}</label>
                  <input
                    placeholder={item.info}
                    className="p-2 w-full border rounded border-slate-200"
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="font-medium">Phone Number</label>
              <div className="w-full flex items-center gap-2">
                <div className="flex items-center gap-2 border p-2 rounded border-slate-200">
                  <FaFlagUsa />
                  <select>
                    <option>1</option>
                  </select>
                </div>
                <input
                  placeholder="(832)-597-6062"
                  className="p-2 w-full border rounded border-slate-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PersonalInformation;
