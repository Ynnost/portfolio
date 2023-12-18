import React from "react";
import style from "./Skills.module.css";
import styleContainer from "../../common/styles/Conteiner.module.css";
import Skill from "./skill/Skill";
import styleHeading from "../../common/styles/Conteiner.module.css";


function Skills() {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={styleHeading.titles}>Skils</h2>
        <div className={style.skills}>
          <Skill title={"JS"} description={"Java Script"} />
          <Skill title={"CSS"} description={"Cascading Style Sheets"} />
          <Skill title={"React"} description={"An open source library for developing user interfaces"} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
