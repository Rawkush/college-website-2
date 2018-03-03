import React from 'react';

// Components
import ProjectListItem from './ProjectsListItem';
import { Title } from './Shared.styles';

export default ({ projects, edit } = {}) => (
  <div>
    {projects ? (
      <div>
        <Title>Projects</Title>
        {projects.map((project) => (
          <ProjectListItem key={project._id} {...project} edit={edit} />
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
