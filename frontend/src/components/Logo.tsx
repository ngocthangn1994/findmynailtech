import logo from "../assets/findmynailtech_logo.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <>
      <Link to="/">
        <div className="w-50 h-20">
          <img className="w-full h-full object-contain" src={logo} />
        </div>
      </Link>
    </>
  );
}

export default Logo;
