import highLight from "../../../../../assets/highlight.png";
import { CiCircleCheck } from "react-icons/ci";
import founder from "../../../../../assets/founder.png";
import coFounder from "../../../../../assets/co-founder.png";

function AboutHighLighSection() {
  const items = [
    "Discover nail technicians near your location",
    "Browse detailed professional profiles",
    "Explore real portfolio photos and nail styles",
    "Compare ratings, reviews, and experience",
    "Contact nail technicians directly",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 text-slate-600 gap-5 items-center">
      {/* Why Choose Us */}
      <div className="relative w-full h-[70%]">
        <img
          className="rounded w-full h-full object-cover"
          src={highLight}
          alt="Find nail technicians near you"
        />

        <div className="absolute inset-0 p-5 space-y-5">
          <p className="text-pink-600 font-bold">WHY CHOOSE FINDMYNAILTECH?</p>

          <p className="font-bold text-2xl text-slate-900">
            Finding the right nail tech should be simple.
          </p>

          {items.map((item, index) => (
            <div key={index} className="max-w-xs flex items-center gap-2">
              <span className="text-pink-600 text-xl shrink-0">
                <CiCircleCheck />
              </span>

              <p>{item}</p>
            </div>
          ))}

          <button className="border border-pink-600 px-4 py-2 rounded text-pink-600 font-medium hover:bg-pink-50">
            Learn More
          </button>
        </div>
      </div>

      {/* Team */}
      <div className="shadow-sm p-10 rounded">
        <p className="text-pink-600 font-bold text-xl">OUR TEAM</p>

        <p className="font-bold text-2xl text-slate-900">
          Building a Better Way to Find Nail Techs
        </p>

        <p className="max-w-md mt-2">
          We're a small team passionate about technology and beauty, building
          FindMyNailTech to help clients discover talented nail technicians and
          help nail professionals grow their visibility.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <img
            className="w-full h-full object-cover rounded"
            src={founder}
            alt="Founder"
          />

          <img
            className="w-full h-full object-cover rounded"
            src={coFounder}
            alt="Co-founder"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutHighLighSection;
