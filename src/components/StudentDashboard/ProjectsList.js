import React from 'react';
import { Warn, Loader } from 'theme/Components';
// Components
import ProjectListItem from './ProjectsListItem';
import { Title } from './Shared.styles';

export default ({ projects, edit } = {}) => (
  <div>
    {projects ? (
      <div>
        {!projects.length ? (
          edit && (
            <Warn padding="50px 0px 0px 0px">There are no projects added.</Warn>
          )
        ) : (
          <div>
            <Title>Projects</Title>
            {projects.map((project) => (
              <ProjectListItem key={project._id} {...project} edit={edit} />
            ))}
          </div>
        )}
      </div>
    ) : (
      <Loader>Loading...</Loader>
    )}
  </div>
);
