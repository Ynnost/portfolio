import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Mein from "./component/main/Mein";
import Skills from "./component/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Mein />
      <Skills />
    </div>
  );
}

export default App;
