import React from "react";
import style from "./About.module.css";
import styleContainer from "../../common/styles/Conteiner.module.css";

function About() {
  return (
    <div className={style.section}>
      <div className={styleContainer.container}>
        <div className={style.inner}>
          <div className={style.left}>
            <div className={style.img}>
              <div className={style.photo}></div>
            </div>
          </div>
          <div className={style.text}>
            <span>Hi There</span>
            <h1>I am Denis Yunin</h1>
            <p>Forontend Developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
