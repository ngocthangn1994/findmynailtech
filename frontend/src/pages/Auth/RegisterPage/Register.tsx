import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
function RegisterPage() {
  return (
    <>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          w-full
          max-w-6xl
          min-h-[700px]
          bg-white
          rounded-2xl
          overflow-hidden
          shadow-lg
        "
        >
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </>
  );
}
export default RegisterPage;
