import Header from "../../components/Header";
import HeroSection from "./components/HeroSection";
import Search from "./components/Search";
import ExploreServices from "./components/ExploreServices";
import TopRated from "./components/TopRated";
import BenefitsBar from "./components/BenefitsBar";
import HowItWorks from "./components/HowItWorks";
import NailTechnician from "./components/NailTechnician";
import WhyUs from "./components/WhyUs";
import ReViews from "./components/Review";
import PopularLocation from "./components/PopularLocation";
import Priority from "./components/Priority";
function HomePage() {
  return (
    <>
      <div className="w-full h-full text-slate-600 space-y-5">
        <Header />
        <HeroSection />
        <Search />
        <div className="grid grid-cols-2 p-2 gap-3">
          <ExploreServices />
          <TopRated />
        </div>
        <BenefitsBar />
        <div className="grid grid-cols-2 gap-5 p-2">
          <HowItWorks />
          <NailTechnician />
        </div>
        <WhyUs />
        <div className="grid grid-cols-2 p-2 gap-5">
          <ReViews />
          <PopularLocation />
        </div>
        <Priority />
      </div>
    </>
  );
}

export default HomePage;
