import { React, useRef, useState, useEffect } from "react";
import "./MainStyle.css";
import "./Animations.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import ModalProject from "./Components/ModalProject";
import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";
import Loading from "./Components/Loading";
import Head from "./Components/Head";

const App = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(null);
  const linkHome = useRef();
  const linkAbout = useRef();
  const linkProjects = useRef();
  const linkContacts = useRef();

  useEffect(() => {
    if (document.readyState !== "loading") {
      setLoading(null);
    }
  }, []);

  if (loading === true) {
    return <Loading loading={loading} />;
  } else
    return (
      <>
        <Head />
        <Header
          linkHome={linkHome}
          linkAbout={linkAbout}
          linkProjects={linkProjects}
          linkContacts={linkContacts}
        />
        <MainSection ref={linkHome} animate={animate} setAnimate={setAnimate} />
        <About ref={linkAbout} LinkButton={linkProjects} />
        <Projects ref={linkProjects} setActiveModal={setActiveModal} />
        <ModalProject project={activeModal} setActiveModal={setActiveModal} />
        <Contacts ref={linkContacts} />
        <Footer />
      </>
    );
};

export default App;
