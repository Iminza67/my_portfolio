import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Footer from "./components/Footer";
import Bann from "./components/Bann";
function App() {
  return (
    <>
      <Bann/>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer /> 
    </>
  );
}

export default App;
