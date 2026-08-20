import step1 from "../../../../../assets/step1.png";
import step2 from "../../../../../assets/step2.png";
import step3 from "../../../../../assets/step3.png";
import step4 from "../../../../../assets/step4.png";

function HowItWorksSteps() {
  const items = [
    {
      number: 1,
      photo: step1,
      name: "Search Near You",
      description:
        "Enter your ZIP code or city to discover nail technicians near your location.",
    },
    {
      number: 2,
      photo: step2,
      name: "Explore Their Work",
      description:
        "Browse profiles, portfolio photos, services, experience, ratings, and reviews.",
    },
    {
      number: 3,
      photo: step3,
      name: "Find Your Match",
      description:
        "Compare nearby nail techs and choose the one whose work and style fit what you're looking for.",
    },
    {
      number: 4,
      photo: step4,
      name: "Connect Directly",
      description:
        "Contact your chosen nail tech directly to discuss pricing, availability, and appointments.",
    },
  ];

  return (
    <div className="text-slate-600">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-10">
        {items.map((item) => (
          <div
            key={item.number}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="w-full h-64">
              <img
                className="w-full h-full object-cover"
                src={item.photo}
                alt={item.name}
              />
            </div>

            <div className="p-5 text-center space-y-2">
              <p className="text-3xl p-2 rounded-lg w-full bg-pink-100 text-pink-600 font-bold">
                {item.number}
              </p>

              <p className="font-bold text-xl text-slate-900">{item.name}</p>

              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorksSteps;
