import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import "../styles/Nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  // Define una función para transformar el texto.
  const transformText = (text) => {
    const formattedText = text.replace(/\s+/g, ""); // Elimina los espacios en blanco.
    return `{ ${formattedText} }`; // Agrega llaves al texto.
  };

  const renderNavItem = (path, label) => {
    const isActive = location.pathname === path;
    return (
      <li key={path}>
        <Link to={path} className={isActive ? "active" : ""}>
          {isActive ? (
            <>
              <code className="import-text">import</code>
              <span>{transformText(label)}</span>
            </>
          ) : (
            label
          )}
        </Link>
      </li>
    );
  };

  return (
    <nav
      className="nav"
      role="navigation"
      aria-label="Navegación principal"
      aria-expanded={showMenu}
    >
      <button
        className="menu-icon"
        type="button"
        aria-label={showMenu ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <ImMenu4 /> : <ImMenu3 />}
      </button>
      <ul className={showMenu ? "menu-open" : ""}>
        {renderNavItem("/", "Sobre Mi")}
        {renderNavItem("/projects", "Proyectos")}
        {renderNavItem("/edtech", "EdTech")}
        {renderNavItem("/contact", "Contacto")}
      </ul>
    </nav>
  );
};

export default Nav;
