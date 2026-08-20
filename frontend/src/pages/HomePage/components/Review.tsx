import { FaImages, FaMapMarkerAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

function Reviews() {
  const benefits = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Find Nail Techs Nearby",
      description:
        "Search by ZIP code or city and discover nail technicians near you.",
    },
    {
      icon: <FaImages />,
      title: "Explore Their Work",
      description:
        "Browse portfolio photos, services, experience, ratings, and reviews before choosing.",
    },
    {
      icon: <FaComments />,
      title: "Connect Directly",
      description:
        "Contact the nail tech you like to discuss pricing, availability, and appointments.",
    },
  ];

  return (
    <div className="space-y-3 bg-white p-5 shadow-sm rounded-xl">
      <p className="text-pink-600 font-medium">MADE FOR NAIL CLIENTS</p>

      <p className="font-bold text-2xl">
        A simpler way to find your next nail tech
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {benefits.map((item, index) => (
          <div key={index} className="p-5 rounded-xl border border-slate-100">
            <span className="text-pink-600 text-3xl">{item.icon}</span>

            <p className="font-bold mt-3">{item.title}</p>

            <p className="text-slate-500 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
