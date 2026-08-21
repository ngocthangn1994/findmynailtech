import { CiHeart } from "react-icons/ci";

function LoveProfileWork() {
  return (
    <>
      <div className="p-5 shadow-sm space-y-3 bg-pink-50 rounded text-slate-600">
        <p className="font-bold">Love Amy's work?</p>
        <p>Save Amy to your favorites to find her easily next time!</p>
        <div className="text-pink-600 bg-white flex items-center gap-3 p-2 shadow-sm font-medium">
          <CiHeart />
          <button>Add to Favorites</button>
        </div>
      </div>
    </>
  );
}

export default LoveProfileWork;
