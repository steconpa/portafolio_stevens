import { Link } from "react-router-dom";
import stevDevLogo from "../assets/StevDevLogo.svg";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={stevDevLogo} alt="StevDev Logo" />
      </Link>
    </div>
  );
};

export default Logo;
