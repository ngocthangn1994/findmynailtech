import DasboardHeader from "./components/DashBoardHeader";
import MenuDashBoard from "./components/MenuDashBoard";
import HeaderDashBoard from "./components/HeaderDashBoard";
import PersonalInformation from "./components/PersonalInformation";
import ProfileReview from "./components/ProfilePreview";
import ProfessionalInfo from "./components/ProfessionalInfo";
function DashBoard() {
  return (
    <>
      <div>
        <DasboardHeader />
        <div className="grid grid-cols-[0.4fr_1.6fr] space-y-3">
          <div>
            <MenuDashBoard />
          </div>
          <div>
            <HeaderDashBoard />
            <div className="grid grid-cols-[1.4fr_0.6fr]">
              <div>
                <PersonalInformation />
                <ProfessionalInfo />
              </div>
              <div>
                <ProfileReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashBoard;
