import "../styles/About.css";
import profilePicture from "../assets/ProfilePicture.PNG";
import { useRef, useState } from "react";
import htmlLogo from "../assets/Html5Logo.svg";
import cssLogo from "../assets/Css3Logo.svg";
import javascriptLogo from "../assets/JavascriptLogo.svg";
import reactLogo from "../assets/ReactLogo.svg";
import nodejsLogo from "../assets/NodejsLogo.svg";
import jwtLogo from "../assets/JwtLogo.svg";
import postgreSqlLogo from "../assets/PostgreSqlLogo.svg";
import msSqlServerLogo from "../assets/MsSqlServerLogo.svg";
import azureLogo from "../assets/AzureLogo.svg";
import postmanLogo from "../assets/PostmanLogo.svg";
import powerAppsLogo from "../assets/PowerAppsLogo.png";
import powerAutomateLogo from "../assets/PowerAutomateLogo.svg";
import scrumLogo from "../assets/ScrumLogo.svg";

const About = () => {
  const imgRef = useRef(null);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 50, y: 50 });
  const techSkills = [
    {
      name: "HTML 5",
      pathLogo: htmlLogo,
    },
    {
      name: "CSS 3",
      pathLogo: cssLogo,
    },
    {
      name: "JavaScript ES6",
      pathLogo: javascriptLogo,
    },
    {
      name: "React",
      pathLogo: reactLogo,
    },
    {
      name: "Node.js",
      pathLogo: nodejsLogo,
    },
    {
      name: "JWT",
      pathLogo: jwtLogo,
    },
    {
      name: "PostgreSQL",
      pathLogo: postgreSqlLogo,
    },
    {
      name: "Miscrosoft SQL Server",
      pathLogo: msSqlServerLogo,
    },
    {
      name: "Azure",
      pathLogo: azureLogo,
    },
    { name: "Postman", pathLogo: postmanLogo },
    {
      name: "Power Apps",
      pathLogo: powerAppsLogo,
    },
    {
      name: "Power Automate",
      pathLogo: powerAutomateLogo,
    },
    {
      name: "Scrum",
      pathLogo: scrumLogo,
    },
  ];

  const calculateBackgroundPosition = (offsetX, offsetY, width, height) => {
    const x = (offsetX / width) * 100; // Calcula la posición horizontal
    const y = (offsetY / height) * 100; // Calcula la posición vertical
    return { x, y };
  };

  // Actualiza el fondo del elemento con un gradiente radial
  const updateBackground = (x, y) => {
    imgRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, #ffb2ffff, #FBCC12ff )`;
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
      <header className="section-header">
        <div className="profile-picture">
          <img
            ref={imgRef}
            src={profilePicture}
            alt="foto de perfil"
            onMouseMove={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="section-title">
          <h1>Stevens Contreras;</h1>
          <code className="section-subtittle">
            <span>{"{ "}</span>
            {'"Full-Stack Developer", "EdTech Desing"'}
            <span>{" }"}</span>
          </code>
        </div>
      </header>
      <aside className="tech-skills">
        <ul>
          {techSkills.map((skill, index) => (
            <li key={index} data-name={skill.name}>
              <img src={skill.pathLogo} alt={skill.name} />
            </li>
          ))}
        </ul>
      </aside>
      <article className="section-content">
        <p>
          Soy un Desarrollador Full Stack y EdTech Designer enfocado en
          transformar las necesidades del negocio y de aprendizaje en
          aplicaciones funcionales. Colaboro estrechamente con equipos
          multidisciplinarios y mi enfoque aporta una perspectiva centrada en la
          experiencia de los usuarios y en lograr soluciones escalables.
        </p>
      </article>
    </section>
  );
};

export default About;
