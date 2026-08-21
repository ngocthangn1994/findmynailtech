import Header from "../../components/Header";
import HeroSectionSearch from "./components/HeroSectionSearch";
import ResultSearch from "./components/ResultSearch";
import LocationSearch from "./components/LocationSearch";
import SearchAreaMap from "./components/SearchAreaMap";
import TrustBenefits from "./components/TrustBenefits";
function SearchNailTech() {
  return (
    <>
      <div>
        <Header />
        <HeroSectionSearch />
        <div className="grid grid-cols-[1.1fr_0.9fr] p-5">
          <ResultSearch />
          <div className="space-y-3">
            <LocationSearch />
            <SearchAreaMap />
            <TrustBenefits />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchNailTech;
