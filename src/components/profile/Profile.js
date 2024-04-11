import { Component } from "react";
import styles from './profile.module.css';

const Profile = ()=>{
    return (
      <>
        <section id={styles.profile}>
          <div className={styles.sectionPicContainer}>
            <img
              src="./assets/images/profile-pic.png"
              alt="Muluken profile picture"
            />
          </div>
          <div className={styles.sectionText}>
            <p className={styles.sectionTextP1}>Hello, I'm</p>
            <h1 className={styles.title}>Muluken</h1>
            <p className={styles.sectionTextP2}>Frontend Developer</p>
            <div className={styles.btnContainer}>
              <button className={styles.btn + " " + styles.btnColor2}>
                Download CV
              </button>
              <button className={styles.btn + " " + styles.btnColor1}>
                Contact Info
              </button>
            </div>
            <div id={styles.socialsContainer}>
              <img
                src="./assets/images/linkedin.png"
                alt="My LinkedIn profile"
                className={styles.icon}
              />
              <img
                src="./assets/images/github.png"
                alt="My Github profile"
                className={styles.icon}
              />
            </div>
          </div>
        </section>
      </>
    );
}

export default Profile