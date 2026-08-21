import { CiHeart } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
function RightSide() {
  return (
    <>
      <div className="w-full h-full p-10 text-slate-600 space-y-5 border border-slate-200">
        <div className="flex items-center gap-3">
          <p>Don't have an account?</p>
          <Link to="/register">
            <p className="text-pink-600 font-medium">Sign up</p>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <p className="font-bold text-4xl text-slate-900">Welcome back </p>
            <CiHeart className="text-pink-600 text-4xl" />
          </div>
          <p>Log in to continue to FindMyNailTech</p>
        </div>
        <div>
          <label className="font-medium">Email Address</label>
          <div className="border border-slate-200 w-full rounded p-2 flex items-center gap-3">
            <MdOutlineMailOutline className="text-xl" />
            <input className="outline-none" placeholder="Enter your email" />
          </div>
        </div>
        <div>
          <label className="font-medium">Password</label>
          <div className="border border-slate-200 w-full rounded p-2 flex items-center gap-3">
            <CiLock className="text-xl" />
            <input className="outline-none" placeholder="Enter your password" />
          </div>
        </div>
        <p className="text-pink-600 font-medium">Forgot password?</p>
        <button className="text-white w-full p-2 bg-pink-600 ronded">
          Log In
        </button>
        <p className="text-center text-sm">
          -----------or continue with------------
        </p>
        <div className="flex items-center border border-slate-200 w-full p-5 justify-center gap-5 font-medium">
          <FaGoogle className="text-red-600" />
          <button>Continue with Google</button>
        </div>
        <div className="flex items-center border border-slate-200 w-full p-5 justify-center gap-5 font-medium">
          <FaFacebook className="text-blue-600" />
          <button>Continue with Facebook</button>
        </div>
        <div className="text-center text-sm">
          <p>By continuing, you agree to our Terms of Service</p>
          <p>and Privacy Policy.</p>
        </div>
      </div>
    </>
  );
}

export default RightSide;
