import { React, forwardRef, useEffect } from "react";
import * as C from "./styles";
import foto from "../../Assets/column1.png";
import {
  LogoGithub,
  LogoLinkedin,
  LogoInstagram,
  LogoWhatsapp
} from "react-ionicons";
import ExternalLink from "../Elements/ExternalLink";

const MainSection = forwardRef(({ animate, setAnimate }, ref) => {
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <C.MainSection ref={ref} animate={animate}>
      <C.Column1 className={animate ? "MainSectionCol1" : null}>
        <img src={foto} alt="Leonam Santana Developer" />
      </C.Column1>
      <C.Column2 className={animate ? "MainSectionCol2" : null}>
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
            <ExternalLink href="https://github.com/leehsanttana">
              <LogoGithub cssClasses="icons" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.linkedin.com/in/leonam-santana-5352a61b3/">
              <LogoLinkedin cssClasses="icons" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://instagram.com/leonam.santtana?igshid=s2debj44nc6v">
              <LogoInstagram cssClasses="icons" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://api.whatsapp.com/send?phone=5521976370007">
              <LogoWhatsapp cssClasses="icons" />
            </ExternalLink>
          </li>
        </C.SocialLinks>
      </C.Column2>
    </C.MainSection>
  );
});

export default MainSection;
