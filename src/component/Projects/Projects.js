import React from "react";
import style from "./Projects.module.css";
import styleContainer from "../../common/styles/Conteiner.module.css";
import Project from "./Project";
import styleHeading from "../../common/styles/Conteiner.module.css";

function Projects() {
  return (
    <div className={style.porojectBlock}>
      <div className={`${styleContainer.container} ${style.porojectContainer}`}>
        <h2 className={styleHeading.titles}>Projects</h2>
        <div className={style.project}>
          <Project title={"Social network"} discription={"1234"} />
          <Project title={"Todo list"} discription={"1234"} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
