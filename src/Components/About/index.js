import React from 'react';
import * as C from './styles';
import Title from '../Elements/Title';
import Subtitle from '../Elements/Subtitle';
import CallToAction from '../Elements/CallToAction';

const About = () => {
  return (
    <C.About>
      <Title title="Sobre" />
      <div>
        <p>
          {' '}
          Me chamo Leonam Santana, tenho 24 anos e sou desenvolvedor Front-End.
        </p>
        <p>
          Meu primeiro contato com a tecnologia foi aos 3 anos de idade, e desde
          então, minha paixão pela área foi crescendo.
        </p>
        <p>
          Meu interesse na área do Front-End começou em 2017, quando fiquei
          curioso em como funcionava um website e como ele é feito. Quando criei
          meu primeiro site, a vontade em me aprofundar pela área foi só
          aumentando!{' '}
        </p>
        <p>
          Atualmente, trabalho como freelancer de desenvolvimento front-end e
          procuro oportunidade para atuar diretamente na área.{' '}
        </p>
      </div>
      <Subtitle subtitle="Técnologias com que trabalho:" />
      <ul>
        <div>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript (ES6)</li>
        </div>
        <div>
          <li>React</li>
          <li>Figma</li>
          <li>Github</li>
        </div>
      </ul>
      <CallToAction href="#">Veja meus projetos</CallToAction>
    </C.About>
  );
};

export default About;
