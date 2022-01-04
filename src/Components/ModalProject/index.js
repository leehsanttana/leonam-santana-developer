import React from "react";
import * as C from "./styles";
import Button from "../Elements/Button";
import AltTitle from "../Elements/AltTitle";
import ExternalLink from "../Elements/ExternalLink";
import { LogoGithub, Link } from "react-ionicons";

const ModalProject = ({ project, setActiveModal }) => {
  function handleClick() {
    setActiveModal(null);
  }

  if (project !== null) {
    return (
      <C.ModalProject>
        <C.ModalProjectWrapper>
          <C.TitleProject>
            <AltTitle title={project.name} />
          </C.TitleProject>
          <C.Column1>
            <img src={project.image} alt={project.name} />
          </C.Column1>
          <C.Column2>
            <p>{project.description}</p>
            <C.SocialLinks>
              <li>
                <ExternalLink
                  href={project.linkRepository}
                  rel="noopener noreferrer"
                >
                  <LogoGithub cssClasses="icons" />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={project.linkProject}
                  rel="noopener noreferrer"
                >
                  <Link cssClasses="icons" />
                </ExternalLink>
              </li>
            </C.SocialLinks>
            <Button onClick={handleClick}>Fechar</Button>
          </C.Column2>
        </C.ModalProjectWrapper>
      </C.ModalProject>
    );
  } else return null;
};

export default ModalProject;
