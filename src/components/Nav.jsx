import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  // Obtiene la ubicación actual de la aplicación
  const location = useLocation();

  // Transforma el texto para que tenga un formato específico
  const transformText = (text) => {
    const formattedText = text.replace(/\s+/g, ""); // Elimina los espacios en blanco
    return `{ ${formattedText} }`; // Agrega llaves al texto
  };

  // Renderiza un elemento de navegación
  const renderNavItem = (path, label) => {
    // Verifica si la ubicación actual coincide con la ruta
    const isActive = location.pathname === path;

    return (
      <li key={path}>
        {/* Agrega una clave única para el elemento */}
        <Link to={path} className={isActive ? "active" : ""}>
          {/* Agrega la clase "active" si la ubicación actual coincide con la ruta */}
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
    <nav className="nav">
      <ul>
        {renderNavItem("/", "Sobre Mi")}
        {renderNavItem("/projects", "Proyectos")}
        {renderNavItem("/edtech", "EdTech")}
        {renderNavItem("/contact", "Contacto")}
      </ul>
    </nav>
  );
};

export default Nav;
