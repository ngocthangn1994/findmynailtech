import Header from "../../../../components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
function AboutUs() {
  return (
    <>
      <div className="space-y-5">
        <Header />
        <HeroSection />
        <StatsSection />
        <div className="p-10 space-y-5">
          <OurStory />
          <OurValues />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
