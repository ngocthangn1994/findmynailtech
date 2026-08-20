import Header from "../../../../components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import AboutHighLighSection from "./components/AboutHighLightSection";
function AboutUs() {
  return (
    <>
      <div className="space-y-5">
        <Header />
        <HeroSection />
        <StatsSection />
        <div className="p-3 space-y-3">
          <OurStory />
          <OurValues />
          <AboutHighLighSection />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
