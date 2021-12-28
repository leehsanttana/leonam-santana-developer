import React from "react";
import "./MainStyle.css";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";

export default function App() {
  return (
    <>
      <Header />
      <MainSection />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
