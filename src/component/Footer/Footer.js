import React from "react";
import style from "./Footer.module.css";
import styleContainer from "../../common/styles/Conteiner.module.css";


function Footer() {
  return (
    <div className={style.footer}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h2 className={style.title}>I`m available for Freelance</h2>
        <div className={style.socialIcons}>
          <div className={style.socialIcon}></div>
          <div className={style.socialIcon}></div>
          <div className={style.socialIcon}></div>
          <div className={style.socialIcon}></div>
          <div className={style.socialIcon}></div>
        </div>
        <span className={style.copyring}>2023 Все права защищены</span>
      </div>
    </div>
  );
}

export default Footer;
