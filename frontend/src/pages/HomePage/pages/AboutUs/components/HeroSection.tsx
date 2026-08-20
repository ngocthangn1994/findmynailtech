import aboutUs from "../../../../../assets/aboutUs.png";
function HeroSection() {
  return (
    <>
      <div className="relative text-slate-600">
        <div className="w-full h-[70%]">
          <img className="w-full h-full object-cover" src={aboutUs} />
        </div>
        <div className="absolute inset-0 p-10 w-xl">
          <p className="text-pink-600 font-medium">ABOUT US</p>
          <div className="mt-3">
            <p className="font-bold text-7xl">Our Mission Is</p>
            <p className="font-bold text-pink-600 text-7xl"> Beautiful.</p>
          </div>

          <div className="mt-5 space-y-3 text-xl">
            <p>
              FindMyNailTech was created to connect busy customers with
              talented, independent nail technicians who bring the salon
              experience to you.
            </p>
            <p>
              We believe self-care should be convenient, personal, and empowring
              - for both clients and nail techs.
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <button className="bg-pink-600 text-white rounded p-2 font-medium">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
