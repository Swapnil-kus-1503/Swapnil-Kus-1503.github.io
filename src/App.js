import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import GlobalStyles from "./styles/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme.js";
import { Skills } from "./components/Skills";

const Container = styled.div`
  margin: 0;
  padding: 0;
  transition: color 0.5s, background-color 0.5s;
  color: ${(props) => props.theme.text};
  background: ${(props) =>
    props.location ? props.theme.background : props.theme.backgroundStart};
`;

const Content = styled.div`
  min-height: calc(100vh - 3.5rem);
  margin-bottom: -3.5rem;
  z-index: 10;
  filter: ${(props) => (props.isOpen ? "blur(0.2rem)" : "none")};
  // max-width: 60rem;
  margin: 0 auto;
  margin-top: 3.4rem;
`;

const App = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1);
    });
  }, []);

  const [theme, setTheme] = useState("dark");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Container>
          <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            theme={theme}
            setTheme={setTheme}
            scroll={scroll}
          />
          <main>
            <Content isOpen={isOpen}>
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </Content>
          </main>
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
