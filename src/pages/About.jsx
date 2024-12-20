import "../styles/About.css";
import profilePicture from "../assets/ProfilePicture.PNG";
import { useRef, useState } from "react";

const About = () => {
  const imgRef = useRef(null);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 50, y: 50 });

  const calculateBackgroundPosition = (offsetX, offsetY, width, height) => {
    const x = (offsetX / width) * 100; // Calcula la posición horizontal
    const y = (offsetY / height) * 100; // Calcula la posición vertical
    return { x, y };
  };

  // Actualiza el fondo del elemento con un gradiente radial
  const updateBackground = (x, y) => {
    imgRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, #8affbfff, #ff8a8aff)`;
  };

  // Maneja el evento "mouseover" del elemento
  const handleMouseOver = (e) => {
    const { offsetWidth: width, offsetHeight: height } = imgRef.current;
    const { offsetX, offsetY } = e.nativeEvent;

    setLastMousePosition({ x: offsetX, y: offsetY });

    const { x, y } = calculateBackgroundPosition(
      offsetX,
      offsetY,
      width,
      height
    );
    updateBackground(x, y);
  };

  // Maneja el evento "mouseleave" del elemento
  const handleMouseLeave = () => {
    const { x, y } = lastMousePosition;
    updateBackground(x, y);
  };

  return (
    <section className="about">
      <div className="profile-picture">
        <img
          ref={imgRef}
          src={profilePicture}
          alt="foto de perfil"
          onMouseMove={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="code">
        <span>const </span>
        <span className="variable">name</span>
        <span> =</span>
      </div>
      <h1 className="string">Stevens Contreras;</h1>
      <p>
        Soy un Desarrollador Full Stack y EdTech Designer enfocado en
        transformar las necesidades del negocio o de aprendizaje en aplicaciones
        funcionales. Colaboro estrechamente con equipos multidisciplinarios y mi
        enfoque aporta una perspectiva centrada en la experiencia de los
        usuarios y en lograr soluciones escalables.
      </p>
    </section>
  );
};

export default About;
