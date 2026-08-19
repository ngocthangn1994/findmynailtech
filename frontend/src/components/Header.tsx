import Logo from "./Logo";
import { CiLocationOn } from "react-icons/ci";

function Header() {
  const menu = [
    "Find Nail Techs",
    "Services",
    "How It Works",
    "For Nail Techs",
  ];
  return (
    <>
      <header>
        <div className="flex items-center justify-between gap-3">
          <Logo />
          <div className="flex justify-between gap-5">
            {menu.map((item) => (
              <div>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <CiLocationOn />
              <p>Houston, TX</p>
            </div>
            <button className="font-medium">Log In</button>
            <button className="font-medium px-2 py-2 text-pink-600 bg-white border border-pink-600 rounded-2xl">
              Sign Up
            </button>
            <button className="font-medium rounded-2xl px-2 py-2 text-white bg-pink-600">
              Become a Nail Tech
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
