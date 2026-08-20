import Logo from "./Logo";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";
function Header() {
  const menu = [
    { path: "/", name: "Find Nail Techs" },
    { path: "/howitworks", name: "How It Works" },
    { path: "/fornailtechs", name: "For Nail Techs" },
    { path: "/about", name: "About Us" },
  ];

  return (
    <>
      <header>
        <div className="flex items-center justify-between gap-3">
          <Logo />
          <div className="flex justify-between gap-5">
            {menu.map((item) => (
              <div>
                <nav>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "text-pink-600" : "text-slate-90"
                    }
                    end
                  >
                    <p className="font-medium">{item.name}</p>
                  </NavLink>
                </nav>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <CiLocationOn />
              <p>Houston, TX</p>
            </div>
            <button className="font-medium">Log In</button>
            <button className="font-medium px-2 py-2 text-pink-600 bg-white border border-pink-600 rounded">
              Sign Up
            </button>
            <button className="font-medium rounded px-2 py-2 text-white bg-pink-600">
              Become a Nail Tech
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
