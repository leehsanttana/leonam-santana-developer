import { React, useRef } from "react";
import "./MainStyle.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";

const App = () => {
  const linkHome = useRef();
  const linkAbout = useRef();
  const linkProjects = useRef();
  const linkContacts = useRef();

  return (
    <>
      <Header
        linkHome={linkHome}
        linkAbout={linkAbout}
        linkProjects={linkProjects}
        linkContacts={linkContacts}
      />
      <MainSection ref={linkHome} />
      <About ref={linkAbout} />
      <Projects ref={linkProjects} />
      <Contacts ref={linkContacts} />
      <Footer />
    </>
  );
};

export default App;
