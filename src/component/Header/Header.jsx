import style from "./Header.module.css";
import React, { useState, useEffect } from "react";


function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Проверяем, насколько прокручена страница
      if (window.scrollY > 100) {
        console.log(window.scrollY);
        // Если страница прокручена, устанавливаем переменную состояния scrolled в true
        setScrolled(true);
      } else {
        // Если страница не прокручена, устанавливаем переменную состояния scrolled в false
        setScrolled(false);
      }
    };

    // Добавляем слушателя события прокрутки при монтировании компонента
    window.addEventListener("scroll", handleScroll);

    // Удаляем слушателя события прокрутки при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${style.topbar} ${scrolled ? style.opened : ""}`}>
      <div className={style.topbarInner}>
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
      </div>
    </div>
  );
}

export default Header;
