import React from "react";
import style from "./Hier.module.css";
import styleContainer from "../../common/styles/Conteiner.module.css";


function Hier() {
  return (
    <div className={style.hierBlock}>
      <div className={`${styleContainer.container} ${style.hierContainer}`}>
        <h2 className={style.title}>I`m available for Freelance</h2>
        <a className={style.hierBtn}>Нанять меня</a>
      </div>
    </div>
  );
}

export default Hier;
