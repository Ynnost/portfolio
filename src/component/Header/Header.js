import React from "react";
import style from "./Header.module.css";
import NavigationPortfolio from "../Navigation/NavigationPortfolio";


function Header() {
  return (
    <div className={style.header}>
      <NavigationPortfolio />
    </div>
  );
}

export default Header;
