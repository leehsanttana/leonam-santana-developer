import React from 'react';
import * as C from './styles';
import Title from '../Elements/Title';
import Subtitle from '../Elements/Subtitle';
import {
  LogoGithub,
  LogoLinkedin,
  LogoInstagram,
  LogoWhatsapp,
} from 'react-ionicons';

const Contacts = () => {
  return (
    <C.Contacts>
      <Title title="Contatos" />
      <Subtitle subtitle="Vamos nos Conectar!" />
      <p>Entre em contato comigo através das minhas redes sociais:</p>

      <C.SocialLinks>
        <li>
          <a href="https://github.com/leehsanttana" target="_blank">
            <LogoGithub cssClasses="icons" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leonam-santana-5352a61b3/"
            target="_blank"
          >
            <LogoLinkedin cssClasses="icons" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/leonam.santtana?igshid=s2debj44nc6v"
            target="_blank"
          >
            <LogoInstagram cssClasses="icons" />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=5521976370007"
            target="_blank"
          >
            <LogoWhatsapp cssClasses="icons" />
          </a>
        </li>
      </C.SocialLinks>
    </C.Contacts>
  );
};

export default Contacts;
