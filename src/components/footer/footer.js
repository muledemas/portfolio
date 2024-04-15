import { Component } from "react";
import styles from "./footer.module.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className={styles.navLinksContainer}>
          <ul className={styles.navLinks}>
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
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2024 Muluken. All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;
