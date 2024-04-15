import { Component } from "react";
import styles from "./navbar.module.css";
//import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav id={styles.desktopNav}>
        <div className={styles.logo}>Time to Code</div>
        <div>
          <ul className={styles.navLinks}>
            
              <li>
                <a href="#about">About</a>
              </li>
          
              <li>
                <a href="#experience">Skills</a>
              </li>
  
              <li href="#projects">
                <a >Projects</a>
              </li>

              <li href="#contact">
                <a>Contact</a>
              </li>

          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
