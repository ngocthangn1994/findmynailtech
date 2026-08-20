import Logo from "./Logo";
import { CiLocationOn } from "react-icons/ci";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const menu = [
    { path: "/", name: "Find Nail Techs" },
    { path: "/howitworks", name: "How It Works" },
    { path: "/fornailtechs", name: "For Nail Techs" },
    { path: "/about", name: "About Us" },
  ];

  return (
    <header className="bg-white py-4">
      <div className="flex items-center justify-between gap-6">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-pink-600"
                    : "text-slate-700 hover:text-pink-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-slate-700">
            <CiLocationOn className="text-xl text-pink-600" />
            <span>Houston, TX</span>
          </button>

          <Link
            to="/login"
            className="font-medium text-slate-700 hover:text-pink-600"
          >
            Log In
          </Link>

          <Link
            to="/register/nail-tech"
            className="font-medium px-4 py-2 text-white bg-pink-600 hover:bg-pink-700 rounded-lg"
          >
            List Your Profile
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
