import { React, forwardRef, useEffect, useState } from "react";
import * as C from "./styles";
import * as L from "../Elements/Button/styles";
import Title from "../Elements/Title";
import Subtitle from "../Elements/Subtitle";
import Button from "../Elements/Button";
import InternalLink from "../Elements/InternalLink";

const About = forwardRef(({ LinkButton }, ref) => {
  const [activeMenu, setActivemenu] = useState(false);
  const [scrollAnimate, setScrollAnimate] = useState(null);

  useEffect(() => {
    function handleScroll() {
      const sectionPosition = ref.current.getBoundingClientRect().top - 200;

      if (sectionPosition < 0) {
        setScrollAnimate(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, [ref]);

  return (
    <C.About ref={ref} className={scrollAnimate ? "scrollRight" : "none"}>
      <Title title="Sobre" />
      <C.TextAboutArea>
        <p>
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
          aumentando!{" "}
        </p>
        <p>
          Atualmente, trabalho como freelancer de desenvolvimento front-end e
          procuro oportunidade para atuar diretamente na área.{" "}
        </p>
      </C.TextAboutArea>
      <Subtitle subtitle="Técnologias que trabalho:" />
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
      <InternalLink
        href="#projects"
        activeMenu={activeMenu}
        setActivemenu={setActivemenu}
        linkRef={LinkButton}
      >
        Veja meus projetos
      </InternalLink>
    </C.About>
  );
});

export default About;
