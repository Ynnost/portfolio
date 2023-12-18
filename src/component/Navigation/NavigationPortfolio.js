import React from "react";
import style from "./NavigationPortfolio.module.css";

function NavigationPortfolio() {
  return (
    <div className={style.menu}>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Hier</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavigationPortfolio;
