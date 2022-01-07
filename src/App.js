import { React, useRef, useState, useEffect } from "react";
import "./MainStyle.css";
import "./Animations.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";
import Loading from "./Components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(null);
  const linkHome = useRef();
  const linkAbout = useRef();
  const linkProjects = useRef();
  const linkContacts = useRef();

  useEffect(() => {
    if (document.readyState === "loading") {
      setLoading(true);
    } else {
      setTimeout(() => {
        setLoading(null);
      }, 1000);
    }
  }, [loading]);

  if (loading !== null) {
    return (
      <>
        <Loading loading={loading} />
      </>
    );
  } else
    return (
      <>
        <Header
          linkHome={linkHome}
          linkAbout={linkAbout}
          linkProjects={linkProjects}
          linkContacts={linkContacts}
        />
        <MainSection ref={linkHome} animate={animate} setAnimate={setAnimate} />
        <About ref={linkAbout} />
        <Projects ref={linkProjects} />
        <Contacts ref={linkContacts} />
        <Footer />
      </>
    );
};

export default App;
