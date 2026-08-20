import Header from "../../../../components/Header";
import HowItWorksHero from "./components/HowItWorksHero";
import HowItWorksSteps from "./components/HowItWorksSteps";
import HowItWorksTrustBar from "./components/HowItWorksTrustBar";
function HowItWorks() {
  return (
    <>
      <div>
        <Header />
        <HowItWorksHero />
        <HowItWorksSteps />
        <HowItWorksTrustBar />
      </div>
    </>
  );
}

export default HowItWorks;
