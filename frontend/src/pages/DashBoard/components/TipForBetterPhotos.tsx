import { GiFallingStar } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";
import { FaPhotoFilm } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

function TipForBetterPhotos() {
  const tips = [
    {
      icon: (
        <FaCameraRetro className="text-5xl p-2 bg-purple-100 text-purple-600 rounded-full" />
      ),
      name: "Use a clear, friendly photo",
      description:
        "A professional photo builds trust and attracts more clients.",
    },
    {
      icon: (
        <GiFallingStar className="text-5xl p-2 bg-yellow-100 text-yellow-600 rounded-full" />
      ),
      name: "Use a clear, friendly photo",
      description:
        "A professional photo builds trust and attracts more clients.",
    },
    {
      icon: (
        <FaPhotoFilm className="text-5xl p-2 bg-blue-100 text-blue-600 rounded-full" />
      ),
      name: "Use a clear, friendly photo",
      description:
        "A professional photo builds trust and attracts more clients.",
    },
    {
      icon: (
        <FaLocationDot className="text-5xl p-2 bg-green-100 text-green-600 rounded-full" />
      ),
      name: "Use a clear, friendly photo",
      description:
        "A professional photo builds trust and attracts more clients.",
    },
    {
      icon: (
        <TiMessages className="text-5xl p-2 bg-pink-100 text-pink-600 rounded-full" />
      ),
      name: "Use a clear, friendly photo",
      description:
        "A professional photo builds trust and attracts more clients.",
    },
  ];
  return (
    <>
      <div className="p-5 shadow-sm border border-slate-200 rounded text-slate-600">
        <div className="flex items-center gap-3">
          <GiFallingStar className="text-3xl text-pink-600" />
          <p className="font-bold">Tips for a Better Profile</p>
        </div>
        <div>
          {tips.map((item) => (
            <div className="flex items-center gap-2">
              {item.icon}
              <div>
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="text-pink-600 font-medium mt-3">
          View All Tips
        </button>
      </div>
    </>
  );
}

export default TipForBetterPhotos;
