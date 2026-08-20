import aboutUs from "../../../../../assets/aboutUs.png";

function HeroSection() {
  return (
    <div className="relative text-slate-600">
      <div className="w-full h-[70%]">
        <img
          className="w-full h-full object-cover"
          src={aboutUs}
          alt="FindMyNailTech community"
        />
      </div>

      <div className="absolute inset-0 p-10 w-3xl">
        <p className="text-pink-600 font-medium">ABOUT US</p>

        <div className="mt-3">
          <p className="font-bold text-7xl text-slate-900">Making It Easier</p>

          <p className="font-bold text-pink-600 text-7xl">
            To Find Your Nail Tech.
          </p>
        </div>

        <div className="mt-5 space-y-3 text-xl">
          <p>
            FindMyNailTech was created to make it easier for clients to discover
            talented independent nail technicians near them.
          </p>

          <p>
            We help nail professionals showcase their work, build their
            presence, and connect directly with customers looking for their
            services.
          </p>
        </div>

        <div className="flex mt-5">
          <button className="bg-pink-600 text-white rounded px-5 py-2 font-medium">
            Find Nail Techs
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
