import highLight from "../../../../../assets/highlight.png";
import { CiCircleCheck } from "react-icons/ci";
import founder from "../../../../../assets/founder.png";
function AboutHighLighSection() {
  const items = [
    "Verified and reviewed nail technicians",
    "Easy booking and secure payments",
    "Flexible scheduling that fits your life",
    "Salon-quality nails in the comfort of your home",
    "Dedicated support when you need it.",
  ];
  return (
    <>
      <div className="grid grid-cols-2 text-slate-600 gap-5 items-center">
        <div className="relative w-full h-[70%]">
          <img className="rounded w-full h-full object-cover" src={highLight} />
          <div className="absolute inset-0 p-5 space-y-5">
            <p className="text-pink-600 font-bold">
              WHY CHOOSE FINDMYNAILTECH?
            </p>
            {items.map((item) => (
              <div className="w-2xs flex items-center gap-2">
                <span className="text-pink-600">
                  <CiCircleCheck />
                </span>
                <p>{item}</p>
              </div>
            ))}
            <button className="border border-pink-600 p-2 rounded text-pink-600 font-medium">
              Learn More
            </button>
          </div>
        </div>
        <div className="shadow-sm p-10 rounded">
          <p className="text-pink-600 font-bold text-xl">OUR TEAM</p>
          <p className="font-bold text-2xl">A Team That Cares</p>
          <p className="w-md">
            We're a passionate team of designers, developers, and beauty
            enthusiam working together to build the best experience for our
            community.
          </p>
          <div>
            <img className="w-full h-full object-cover" src={founder} />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutHighLighSection;
