import { useState } from "react";
import "../styles/Projects.css";
import DressStockManager from "../assets/dress-stock-manager.png";

const projects = [
  {
    title: "Dress Stock Manager",
    description:
      "Aplicación para el control de dotaciones de uniformes para empleados.",
    imageUrl: DressStockManager,
    technologies: ["PowerApps", "Power Automate", "SQL Server"],
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    imageUrl: DressStockManager,
    technologies: ["Angular", "Firebase"],
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    imageUrl: DressStockManager,
    technologies: ["Vue", "Django"],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <article className="projects-page" id="projects-page">
      <h2>Proyectos de Desarrollo</h2>
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ display: index === currentIndex ? "flex" : "none" }}
          >
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Tecnologías:</strong> {project.technologies.join(", ")}
              </p>
            </div>
          </div>
        ))}
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </article>
  );
};

export default Projects;
