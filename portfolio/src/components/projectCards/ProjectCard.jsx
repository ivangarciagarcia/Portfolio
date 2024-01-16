import "./projectCard.css";

export const ProjectCard = (props) => {

  const { src, alt, title, description, buttonText, onClick } = props;

  return (
    <div className="card">
      <img src={src} alt={alt} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  );
};
