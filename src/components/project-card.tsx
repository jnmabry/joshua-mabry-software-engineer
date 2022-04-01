import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project">
      <div className="description">
        <h3 className="title">{project.title}</h3>
        <p className="role">
          <b>Role:</b> <br />
          {project.role}
        </p>
        <p>
          <b>Description:</b> <br></br>
          {project.description}
        </p>
        <p className="technologies">
          <b>Technologies:</b> <br />
          {project.technologies}
        </p>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <button>View Project Live</button>
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button>View Github Repo</button>
          </a>
        )}
      </div>
      <div className="image"></div>
    </div>
  );
};

export default ProjectCard;
