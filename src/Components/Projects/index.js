import { React, useState, forwardRef, useEffect } from "react";
import * as C from "./styles";
import AltTitle from "../Elements/AltTitle";
import Project from "../Project";
import ModalProject from "../ModalProject";

const projects = [
  {
    id: "0",
    name: "Ghibli gallery movies",
    description:
      "Projeto com uma galeria de todos os filmes do aclamado estúdio japonês Chibli. Esse projeto tem como finalidade de praticar grid layout e o consumo de uma API externa, além de treinar minhas habilidades em React.",
    linkRepository: "https://github.com/leehsanttana/ghibli-gallery-movies",
    linkProject: "https://ghibli-gallery-movies.vercel.app/",
    tecnologies: ["React", "Ghibli-API"],
    image: "https://i.imgur.com/MUim1cK.png?1"
  },
  {
    id: "1",
    name: "Lequizz app",
    description:
      "Projeto produzido encima de um desafio que me foi lançado para uma vaga de desenvolvedor front-end júnior. Era necessário o consumo da APi pública Quiz-Api, trabalhar com a biblioteca React-Router-Dom e mostrar minhas habilidades com o framework React",
    linkRepository: "https://github.com/leehsanttana/lequizz-app",
    linkProject: "https://lequizz-app.vercel.app/",
    tecnologies: ["React", "Router-Dom", "Styled-Components", "Quiz-API"],
    image: "https://i.imgur.com/Q5bwGcC.png"
  },
  {
    id: "2",
    name: "Text Generator App",
    description:
      "Com o intúito auxiliar novos desenvolvedores front-end a produzir seu código de estilo para textos e de por em práticas meus conhecimentos de desenvolvimento,essa aplicação foi feita utilizando a framework React como base para a produção, também foi utilizado a biblioteca externa Styled-Components.",
    linkRepository: "https://github.com/leehsanttana/text-generator-app",
    linkProject: "https://text-generator-app-ten.vercel.app/",
    tecnologies: ["React", "Styled-Components"],
    image: "https://i.imgur.com/KmGXEOt.png?1"
  },
  {
    id: "3",
    name: "React project spider-man",
    description:
      "Projeto pessoal produzido em React, com o objetivo de praticar os conceitos gerais da framework, como Hooks, criação de rotas com a biblioteca externa React-Router-Dom e estilização com a biblioteca Styled-Components.",
    linkRepository: "https://github.com/leehsanttana/react-project-spider-man",
    linkProject: "https://csb-4zrj5-1gvtddp8l-leehsanttana.vercel.app/",
    tecnologies: ["React", "Router-Dom", "Styled-Components"],
    image: "https://i.imgur.com/BirB4x4.png?1"
  },
  {
    id: "4",
    name: "Calcule IMC",
    description:
      "Feito em Javascript, essa aplicação foi criada para realizar o cálculo IMC do usuário, além de também informar a ele em qual nível ele se enquadra.",
    linkRepository: "https://github.com/leehsanttana/calcule-imc",
    linkProject: "https://leehsanttana.github.io/calcule-imc/",
    tecnologies: ["HTML5", "CSS3", "Javascript"],
    image: "https://i.imgur.com/JwMmzCR.png?1"
  },
  {
    id: "5",
    name: "Lee Sin Landing page",
    description:
      "Página apresentativa da personagem Lee Sin do famoso jogo League of Legends. O projeto foi produzido para praticar os conceitos de Design responsivo e Desenvolvimento Web.",
    linkRepository: "https://github.com/leehsanttana/lee-sin-landing-page",
    linkProject: "https://leehsanttana.github.io/lee-sin-landing-page/",
    tecnologies: ["HTML5", "CSS3", "Javascript"],
    image: "https://i.imgur.com/aNta04s.png"
  },
  {
    id: "6",
    name: "Riven Landing page",
    description:
      "Página apresentativa da personagem Riven do famoso jogo League of Legends. O projeto foi produzido para praticar os conceitos de Design responsivo e Desenvolvimento Web.",
    linkRepository: "https://github.com/leehsanttana/riven-landing-page",
    linkProject: "https://leehsanttana.github.io/riven-landing-page/",
    tecnologies: ["HTML5", "CSS3", "Javascript"],
    image: "https://i.imgur.com/9TEv048.png?1"
  },
  {
    id: "7",
    name: "Photographer Landing page",
    description:
      "Página apresentativa de fotógrafo freelancer. O projeto foi produzido para praticar os conceitos de Design responsivo e Desenvolvimento Web.",
    linkRepository: "https://github.com/leehsanttana/photographer-landing-page",
    linkProject: "https://leehsanttana.github.io/photographer-landing-page/",
    tecnologies: ["HTML5", "CSS3", "Javascript"],
    image: "https://i.imgur.com/83V42Iz.png?1"
  }
];

const Projects = forwardRef((props, ref) => {
  const [activeModal, setActiveModal] = useState(null);
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
    <C.Projects
      ref={ref}
      {...props}
      className={scrollAnimate ? "scrollLeft" : "none"}
    >
      {activeModal && (
        <ModalProject project={activeModal} setActiveModal={setActiveModal} />
      )}
      <AltTitle title="projetos" />
      <C.ListProjects>
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              project={project}
              setActiveModal={setActiveModal}
            />
          );
        })}
      </C.ListProjects>
    </C.Projects>
  );
});

export default Projects;
