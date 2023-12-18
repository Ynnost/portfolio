import React from "react";
import style from "./Contact.module.css";
import styleContainer from "../../common/styles/Conteiner.module.css";
import styleHeading from "../../common/styles/Conteiner.module.css";

function Contact() {
  return (
    <div className={style.contactBlock}>
      <div className={`${styleContainer.container} ${style.contactContainer}`}>
        <h2 className={styleHeading.titles}>Contact</h2>
        <form className={style.contactForm}>
          <input type="text" />
          <input type="text" />
          <textarea />
          <button type="submit" className={style.submitBtn}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
