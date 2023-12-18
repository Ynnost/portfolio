import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Mein from "./component/Main/Mein";
import Skills from "./component/skills/Skills";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects";
import Contact from "./component/Contact/Contact";
import Hier from "./component/Hier/Hier";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Mein />
      <About />
      <Skills />
      <Projects/>
      <Hier/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
