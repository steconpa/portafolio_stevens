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

const TechSkills = () => {
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

  return (
    <aside className="tech-skills">
      <h3>Habilidades tecnicas</h3>
      <ul>
        {techSkills.map((skill, index) => (
          <li key={index} data-name={skill.name}>
            <img src={skill.pathLogo} alt={`${skill.name} logo`} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TechSkills;
