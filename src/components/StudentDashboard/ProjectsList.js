import React from 'react';

// Components
import ProjectListItem from './ProjectsListItem';

export default ({ projects, edit } = {}) => (
  <div>
    {projects ? (
      <div>
        <hr />
        <h4>Projects</h4>
        {projects.map((project) => (
          <ProjectListItem key={project._id} {...project} edit={edit} />
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
