import { NavLink } from "react-router-dom";

function Menu() {
  const menu = [
    { path: "profileabout", name: "About" },
    { path: "profileservices", name: "Services" },
    { path: "profileportfolio", name: "Porfolio" },
    { path: "profilereviews", name: "Reviews" },
  ];
  return (
    <>
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
    </>
  );
}

export default Menu;
