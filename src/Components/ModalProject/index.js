import React from "react";
import * as C from "./styles";
import Button from "../Elements/Button";
import AltTitle from "../Elements/AltTitle";
import LinkButton from "../Elements/LinkButton";
import NextButton from "../Elements/NextButton";
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
                <LinkButton
                  href={project.linkRepository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoGithub cssClasses="icons" />
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  href={project.linkProject}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link cssClasses="icons" />
                </LinkButton>
              </li>
            </C.SocialLinks>
            <Button onClick={handleClick}>Fechar</Button>
          </C.Column2>
          <C.ButtonNext>
            <NextButton />
          </C.ButtonNext>
        </C.ModalProjectWrapper>
      </C.ModalProject>
    );
  } else return null;
};

export default ModalProject;
