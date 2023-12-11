import React from "react";
import style from "./Mein.module.css";
import styleContainer from "../../common/styles/Conteiner.module.css"

function Mein() {
  return (
    <div className={style.mainblock}>
      <div className={styleContainer.container}>
        <div className={style.text}>
          <span>Hi There</span>
          <h1>I am Denis Yunin</h1>
          <p>Forontend Developer.</p>
        </div>
        <div className={style.photo}></div>
      </div>
    </div>
  );
}

export default Mein;
