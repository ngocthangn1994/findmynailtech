import Header from "../../components/Header";
import HeroSection from "./components/HeroSection";
import Search from "./components/Search";
function HomePage() {
  return (
    <>
      <div className="w-full h-full text-slate-600 space-y-5">
        <Header />
        <HeroSection />
        <Search />
      </div>
    </>
  );
}

export default HomePage;
