import "../styles/About.css";
import TechSkills from "../components/TechSkills";
import ProfilePicture from "../components/ProfilePicture";
import { useState } from "react";

const About = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    const emailInput = document.getElementById("email");
    emailInput.select();
    document.execCommand("copy");
    setCopySuccess("Correo copiado!");
    setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
  };

  const viewCV = () => {
    window.open("/path/to/cv.pdf", "_blank");
  };

  return (
    <article id="about-me" className="about-me">
      <header className="section-header">
        <ProfilePicture />
        <div className="section-title">
          <h2>Stevens Contreras</h2>
          <code className="section-subtittle">
            <span>{"{ "}</span>
            {'"Full-Stack Developer", "EdTech Desing"'}
            <span>{" }"}</span>
          </code>
        </div>
      </header>
      <TechSkills />
      <div className="section-content">
        <p>
          Soy un Desarrollador Full Stack y EdTech Designer enfocado en
          transformar las necesidades del negocio y de aprendizaje en
          aplicaciones funcionales. Colaboro estrechamente con equipos
          multidisciplinarios y mi enfoque aporta una perspectiva centrada en la
          experiencia de los usuarios y en lograr soluciones escalables.
        </p>
        <div className="section-content__contact">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value="stecop@outlook.com"
            readOnly
            aria-label="Email address"
          />
          <button
            type="button"
            aria-label="Copiar correo electrónico"
            onClick={copyToClipboard}
          >
            Copy
          </button>
          {copySuccess && <span className="copy-success">{copySuccess}</span>}
          <button type="button" aria-label="Ver Curriculum" onClick={viewCV}>
            Ver Curriculum
          </button>
        </div>
      </div>
    </article>
  );
};

export default About;
