import { Component } from "react";
import styles from './mobileToggle.module.css';
import { Link } from "react-scroll";

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
              <Link to="profile" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>

            <li>
              <Link to="experience" smooth={true} duration={500}>
                Skills
              </Link>
            </li>

            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};
export default MobileToggle