import { Component } from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <>
      <nav id={styles.desktopNav}>
        <div className={styles.logo}>logo</div>
        <div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experiance">Experiance</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
