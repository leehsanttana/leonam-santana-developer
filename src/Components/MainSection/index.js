import React from "react";
import * as C from "./styles";
import {
  LogoGithub,
  LogoLinkedin,
  LogoInstagram,
  LogoWhatsapp
} from "react-ionicons";
import LinkButton from "../Elements/LinkButton";

const MainSection = () => {
  return (
    <C.MainSection>
      <C.Column1>
        <div className="mainImage"></div>
      </C.Column1>
      <C.Column2>
        <C.InitialTitle>
          <h2>olá, me chamo</h2>
        </C.InitialTitle>
        <C.MainTitle>
          <h1>Leonam Santana</h1>
        </C.MainTitle>
        <C.MainSubtitle>
          <h2>Desenvolvedor Front-End</h2>
        </C.MainSubtitle>
        <C.SocialLinks>
          <li>
            <LinkButton href="https://github.com/leehsanttana" target="_blank">
              <LogoGithub cssClasses="icons" />
            </LinkButton>
          </li>
          <li>
            <LinkButton
              href="https://www.linkedin.com/in/leonam-santana-5352a61b3/"
              target="_blank"
            >
              <LogoLinkedin cssClasses="icons" />
            </LinkButton>
          </li>
          <li>
            <LinkButton
              href="https://instagram.com/leonam.santtana?igshid=s2debj44nc6v"
              target="_blank"
            >
              <LogoInstagram cssClasses="icons" />
            </LinkButton>
          </li>
          <li>
            <LinkButton
              href="https://api.whatsapp.com/send?phone=5521976370007"
              target="_blank"
            >
              <LogoWhatsapp cssClasses="icons" />
            </LinkButton>
          </li>
        </C.SocialLinks>
      </C.Column2>
    </C.MainSection>
  );
};

export default MainSection;
