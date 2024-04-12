import { Component } from "react";
import styles from './mobileToggle.module.css';

const MobileToggle = ({ isOpen, toggleOpen }) => {
  return (
    <>
      <nav id={styles.hamburgerNav}>
        <div className={styles.logo}>Time to Code</div>
        <div className={styles.hamburgerMenu}>
          <div
            className={styles.hamburgerIcon + " " + (isOpen ? styles.open : "")}
            onClick={toggleOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={styles.menuLinks + " " + (isOpen ? styles.open : "")}
            onClick={toggleOpen}
          >
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
          </div>
        </div>
      </nav>
    </>
  );
};
export default MobileToggle