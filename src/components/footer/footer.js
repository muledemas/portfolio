import { Component } from "react";
import styles from './footer.module.css'

const Footer=()=>{
    return (
      <footer>
        <nav>
          <div className={styles.navLinksContainer}>
            <ul className={styles.navLinks}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
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
        <p>Copyright &#169; 2024 Muluken. All Rights Reserved.</p>
      </footer>
    );
}
export default Footer