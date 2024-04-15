import { Component } from "react";
import styles from './profile.module.css';

const Profile = ()=>{
   const downloadFile = () => {
     // Logic to trigger file download
      const filePath = process.env.PUBLIC_URL + "/assets/images/resume.pdf";
      const link = document.createElement("a");
      link.href = filePath;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

     //window.location.href = "./assets/images/resume.pdf";
   };
    return (
      <section id={styles.profile} name="profile">
        <div className={styles.sectionText}>
          <p className={styles.sectionTextP1}>Hello, I'm</p>
          <h1 className={styles.title}>Muluken Demas</h1>
          <p className={styles.sectionTextP2}>Frontend Developer</p>
          <div className={styles.btnContainer}>
            <button
              className={styles.btn + " " + styles.btnColor2}
              onClick={downloadFile}
            >
              Resume
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
        <div className={styles.sectionPicContainer}>
          <img src="./assets/images/muler1.png" alt="Muluken profile picture" />
        </div>
      </section>
    );
}

export default Profile