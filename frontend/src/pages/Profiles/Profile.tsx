import Header from "../../components/Header";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import ProfileAbout from "./components/ProfileAbout";
import ServicesOffered from "./components/ServicesOffered";
import Portfolio from "./components/Portfolio";
import BusinessInfo from "./components/BusinessInfo";
import ServiceArea from "./components/ServiceArea";
import BusinessHours from "./components/BusinessHours";
import Follow from "./components/Follow";
import ContactProfile from "./components/ContactProfile";
import Location from "./components/Location";
import Availability from "./components/Availablity";
import WhyChooseMe from "./components/WhyChooseMe";
import FAQs from "./components/FAQs";
import LoveProfileWork from "./components/LoveProfileWork";
import ProfileFooter from "./components/ProfileFooter";
function Profile() {
  return (
    <>
      <div className="space-y-1">
        <Header />
        <HeroSection />
        <div className="grid grid-cols-[0.4fr_1.1fr_0.5fr] mt-5">
          <div className="p-3 space-y-3">
            <BusinessInfo />
            <ServiceArea />
            <BusinessHours />
            <Follow />
            <LoveProfileWork />
          </div>
          <div className="space-y-3 p-3">
            <Menu />
            <ProfileAbout />
            <ServicesOffered />
            <Portfolio />
          </div>
          <div className="space-y-3 p-3">
            <ContactProfile />
            <Location />
            <Availability />
            <WhyChooseMe />
            <FAQs />
          </div>
        </div>
        <ProfileFooter />
      </div>
    </>
  );
}
export default Profile;
