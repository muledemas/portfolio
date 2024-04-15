import { Component } from "react";
import styles from './about.module.css';

const About=()=>{
    return (
      <section id={styles.about}>
        <p className={styles.sectionTextP1}>Get To Know More</p>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutDetailsContainer}>
            <div className={styles.aboutContainers}>
              <div className={styles.detailsContainer}>
                <img
                  src="./assets/images/experience.png"
                  alt="Experience icon"
                  className={styles.icon}
                />
                <h3>Experience</h3>
                <p>
                  6+ years <br />
                  Frontend Development
                </p>
              </div>
              <div className={styles.detailsContainer}>
                <img
                  src="./assets/images/education.png"
                  alt="Education icon"
                  className={styles.icon}
                />
                <h3>Education</h3>
                <p>B.Sc. Bachelors Degree</p>
              </div>
            </div>
            <div className={styles.textContainer}>
              <p>
                Dedicated and results-driven Frontend Software Engineer with
                over 6 years of experience specializing in Angular, React,
                JavaScript, HTML, and CSS. Skilled in translating design
                concepts into responsive and interactive user interfaces. Proven
                track record of delivering high-quality software solutions
                within agile environments. Adept at collaborating with
                cross-functional teams to drive project success.
              </p>
            </div>
          </div>
          <div className={styles.sectionPicContainer}>
            <img
              src="./assets/images/muler4.png"
              alt="Profile picture"
              className={styles.aboutPic}
            />
          </div>
        </div>
        <img
          src="./assets/images/arrow.png"
          alt="Arrow icon"
          className={styles.arrow}
        />
      </section>
    );
}
export default About