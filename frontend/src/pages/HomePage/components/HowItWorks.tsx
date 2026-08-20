import howItWork1 from "../../../assets/howitwork1.png";
import howItWork2 from "../../../assets/howitwork2.png";
import howItWork3 from "../../../assets/howitwork3.png";

function HowItWorks() {
  const menu = [
    {
      photo: howItWork1,
      name: "Search near you",
      description:
        "Enter your ZIP code or city to find nail technicians near your location.",
    },
    {
      photo: howItWork2,
      name: "Explore their work",
      description:
        "Browse profiles, portfolio photos, services, ratings, reviews, and experience.",
    },
    {
      photo: howItWork3,
      name: "Connect directly",
      description:
        "Choose a nail tech you like and contact them directly to discuss pricing and appointments.",
    },
  ];

  return (
    <div className="space-y-3">
      <p className="text-pink-600 font-medium">HOW IT WORKS</p>

      <p className="font-bold text-xl">
        Find the right nail tech in 3 simple steps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {menu.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="w-full h-68">
              <img
                className="w-full h-full object-cover"
                src={item.photo}
                alt={item.name}
              />
            </div>

            <div className="p-4 text-center">
              <p className="font-bold">{item.name}</p>

              <p className="text-sm text-gray-600 mt-2 leading-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
