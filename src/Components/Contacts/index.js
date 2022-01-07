import { React, forwardRef, useEffect, useState } from "react";
import * as C from "./styles";
import Title from "../Elements/Title";
import Subtitle from "../Elements/Subtitle";
import {
  LogoGithub,
  LogoLinkedin,
  LogoInstagram,
  LogoWhatsapp
} from "react-ionicons";
import ExternalLink from "../Elements/ExternalLink";

const Contacts = forwardRef((props, ref) => {
  const [scrollAnimate, setScrollAnimate] = useState(null);

  useEffect(() => {
    function handleScroll() {
      const sectionPosition = ref.current.getBoundingClientRect().top - 400;

      if (sectionPosition < 0) {
        setScrollAnimate(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, [ref]);
  return (
    <C.Contacts
      ref={ref}
      {...props}
      className={scrollAnimate ? "scrollRight" : "none"}
    >
      <Title title="Contatos" />
      <Subtitle subtitle="Vamos nos Conectar!" />
      <p>Entre em contato comigo através das minhas redes sociais:</p>

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
    </C.Contacts>
  );
});

export default Contacts;
