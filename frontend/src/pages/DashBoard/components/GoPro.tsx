import { LuCrown } from "react-icons/lu";

function GoPro() {
  return (
    <>
      <div className="p-5 shadow-sm border border-slate-200 rounded text-slate-600 flex flex-col items-center text-center">
        <LuCrown className="text-6xl text-pink-600 bg-pink-50 p-2 rounded-full" />
        <p className="font-bold">Go Pro Today!</p>
        <p className="text-sm">
          Unlock advanced features, boost your visibility and grow your nail
          business.
        </p>
      </div>
    </>
  );
}

export default GoPro;
