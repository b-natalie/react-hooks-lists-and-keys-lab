import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const techSpans = technologies.map(tech => {
    return (
      <span key={tech}>{tech}</span>
    )
  })
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techSpans}
      </div>
    </div>
  );
}

export default ProjectItem;
