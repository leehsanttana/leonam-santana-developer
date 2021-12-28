import React from "react";
import * as C from "./styles";
import Button from "../Elements/Button";
import Subtitle from "../Elements/Subtitle";
import AltTitle from "../Elements/AltTitle";
import LinkButton from "../Elements/LinkButton";
import NextButton from "../Elements/NextButton";
import { LogoGithub, Link } from "react-ionicons";

const ModalProject = ({ activeModal, setActiveModal }) => {
  function handleClick() {
    setActiveModal(null);
  }

  if (activeModal === true) {
    return (
      <C.ModalProject>
        <C.ModalProjectWrapper>
          <C.TitleProject>
            <AltTitle title="Nome do projeto" />
          </C.TitleProject>
          <C.Column1>
            <div></div>
          </C.Column1>
          <C.Column2>
            <Subtitle subtitle="Nome do Projeto"></Subtitle>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <C.SocialLinks>
              <li>
                <LinkButton
                  href="https://github.com/leehsanttana"
                  target="_blank"
                >
                  <LogoGithub cssClasses="icons" />
                </LinkButton>
              </li>
              <li>
                <LinkButton href="#" target="_blank">
                  <Link cssClasses="icons" />
                </LinkButton>
              </li>
            </C.SocialLinks>
            <Button onClick={handleClick}>Fechar</Button>
            <C.ButtonNext>
              <NextButton />
            </C.ButtonNext>
          </C.Column2>
        </C.ModalProjectWrapper>
      </C.ModalProject>
    );
  } else return null;
};

export default ModalProject;
