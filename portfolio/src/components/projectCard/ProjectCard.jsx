import "./projectCard.css";

export const ProjectCard = ({ imageUrl, title, description, githubLink, websiteLink }) => {

  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + imageUrl} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p className="project-description">{description}</p>
        <div className="card-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="link-button">Ver en GitHub</a>
          {websiteLink && (
            <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="link-button">Visitar Sitio Web</a>
          )}
        </div>
      </div>
    </div>
  );
};