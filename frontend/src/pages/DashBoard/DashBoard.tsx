import DasboardHeader from "./components/DashBoardHeader";
import MenuDashBoard from "./components/MenuDashBoard";
import HeaderDashBoard from "./components/HeaderDashBoard";
import PersonalInformation from "./components/PersonalInformation";
import ProfileReview from "./components/ProfilePreview";
import ProfessionalInfo from "./components/ProfessionalInfo";
import AboutEditor from "./components/AboutEditor";
import ProfileCompletion from "./components/ProfileCompletion";
import GoPro from "./components/GoPro";
import TipForBetterPhotos from "./components/TipForBetterPhotos";
function DashBoard() {
  return (
    <>
      <div>
        <DasboardHeader />
        <div className="grid grid-cols-[0.4fr_1.6fr] space-y-3">
          <div className="space-y-3 p-2">
            <MenuDashBoard />
            <GoPro />
          </div>
          <div className="p-2">
            <HeaderDashBoard />
            <div className="grid grid-cols-[1.4fr_0.6fr] gap-5">
              <div className="space-y-5">
                <PersonalInformation />
                <ProfessionalInfo />
                <AboutEditor />
              </div>
              <div className="space-y-3">
                <ProfileReview />
                <ProfileCompletion />
                <TipForBetterPhotos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashBoard;
