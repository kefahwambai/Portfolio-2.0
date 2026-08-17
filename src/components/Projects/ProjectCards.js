import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, language, description, ghLink, demoLink }) {
  return (
    <article className="work-card">
      <div className="work-card-image-wrap"><img src={imgPath} alt={`${title} project`} className="work-card-image" /></div>
      <div className="work-card-body">
        <div className="work-card-meta">{language}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="work-card-links">
          {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer">Live site <AiOutlineArrowUp /></a>}
          {ghLink && <a href={ghLink} target="_blank" rel="noopener noreferrer"><BsGithub /> Source</a>}
        </div>
      </div>
    </article>
  );
}

export default ProjectCards;
