import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project">
      <div className="description">
        <h3 className="title">{project.title}</h3>
        <p className="role">
          <b>Role:</b> {project.role}
        </p>
        <p className="technologies">
          <b>Technologies:</b> {project.technologies}
        </p>
        <p>
          <b>Description:</b> {project.description}
        </p>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <button>View Project Live</button>
        </a>
      </div>
      <div className="image"></div>
    </div>
  );
};

export default ProjectCard;
