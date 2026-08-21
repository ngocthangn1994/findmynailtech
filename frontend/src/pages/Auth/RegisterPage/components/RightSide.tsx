import { CiHeart } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPersonAddOutline } from "react-icons/io5";
function RightSide() {
  return (
    <>
      <div className="w-full h-full p-10 text-slate-600 space-y-5 border border-slate-200">
        <div className="flex items-center gap-3">
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="text-pink-600 font-medium">Log in</button>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold">Create your account</p>
            <CiHeart className="text-3xl text-pink-600" />
          </div>
          <p className="text-sm">Join the FindMyNailTech community.</p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="font-medium">First Name</label>
            <div className="flex items-center gap-3 border border-slate-200 p-3 rounded">
              <IoPersonAddOutline />
              <input placeholder="Create a password" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="font-medium">Last Name</label>
            <div className="flex items-center gap-3 border border-slate-200 p-3 rounded">
              <IoPersonAddOutline />
              <input placeholder="Enter your last name" />
            </div>
          </div>
        </div>
        <div>
          <label className="font-medium">Email Address</label>
          <div className="flex items-center gap-3 border border-slate-200 p-3 rounded">
            <MdOutlineMailOutline />
            <input placeholder="Enter your email" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="font-medium">Password</label>
            <div className="flex items-center gap-3 border border-slate-200 p-3 rounded">
              <CiLock />
              <input placeholder="Create a password" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="font-medium">Confirm Password</label>
            <div className="flex items-center gap-3 border border-slate-200 p-3 rounded">
              <CiLock />
              <input placeholder="Enter your last name" />
            </div>
          </div>
        </div>
        <p className="text-xs">
          Use 8+ characters with a mix of letters, numbers & symbols
        </p>
        <button className="text-white w-full p-2 bg-pink-600 ronded">
          Create Account
        </button>
        <p className="text-center text-sm">-----------or sign up------------</p>
        <div className="flex items-center border border-slate-200 w-full p-5 justify-center gap-5 font-medium">
          <FaGoogle className="text-red-600" />
          <button>Continue with Google</button>
        </div>
        <div className="flex items-center border border-slate-200 w-full p-5 justify-center gap-5 font-medium">
          <FaFacebook className="text-blue-600" />
          <button>Continue with Facebook</button>
        </div>
        <div className="text-center text-sm">
          <p>
            By creating an account, you agree to receive emails from
            FindMyNailTech.
          </p>
        </div>
      </div>
    </>
  );
}

export default RightSide;
