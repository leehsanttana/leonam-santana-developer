import React from 'react';
import * as C from './styles';
import AltTitle from '../Elements/AltTitle';
import Project from '../Project';

const Projects = () => {
  return (
    <C.Projects>
      <AltTitle title="projetos" />
      <C.ListProjects>
        <Project href="#" />
        <Project href="#" />
        <Project href="#" />
        <Project href="#" />
      </C.ListProjects>
    </C.Projects>
  );
};

export default Projects;
