import { Link } from "react-router-dom";
import Nav from "./Nav";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>{"<StevDev />"}</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
