import GlobalStyles from "./GlobalStyles";
import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Components/Header/Header";
import Showcase from "./Components/Showcase/Showcase";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Portfólio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      <GlobalStyles />
      <Header />
      <Showcase id="showcase" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </>
  );
};

export default App;
