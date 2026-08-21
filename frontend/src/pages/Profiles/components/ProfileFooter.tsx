import { RiQwenAiLine } from "react-icons/ri";

function ProfileFooter() {
  return (
    <>
      <div className="bg-pink-600 text-white p-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <RiQwenAiLine className="text-6xl" />
          <div>
            <p className="font-medium">Want to be featured here?</p>
            <p className="text-sm">
              Create your professional profile and connect with more clients.
            </p>
          </div>
        </div>
        <button className="py-3 px-5 bg-white text-pink-600 font-bold rounded">
          Become a Nail Tech
        </button>
      </div>
    </>
  );
}

export default ProfileFooter;
