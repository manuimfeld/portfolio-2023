import "./App.css";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  const [activeNavItem, setActiveNavItem] = useState("home");

  return (
    <>
      <Nav activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
      <Home setActiveNavItem={setActiveNavItem} />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
