import { Component } from "react";
import styles from './projects.module.css'

const Projects=(props)=>{
    return (
      <section id={styles.projects} name="projects" ref={props.refs}>
        <p className={styles.sectionTextP1}>Browse My Recent</p>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.experienceDetailsContainer}>
          <div className={styles.aboutContainers}>
            <div
              className={styles.detailsContainer + " " + styles.colorContainer}
            >
              <div className={styles.articleContainer}>
                <img
                  src="./assets/images/project-1.png"
                  alt="Project 1"
                  className={styles.projectImg}
                />
              </div>
              <h2
                className={
                  styles.experienceSubTitle + " " + styles.projectTitle
                }
              >
                Project One
              </h2>
              <div className={styles.btnContainer}>
                <button
                  className={
                    styles.btn +
                    " " +
                    styles.btnColor2 +
                    " " +
                    styles.projectBtn
                  }
                >
                  Github
                </button>
                <button
                  className={
                    styles.btn +
                    " " +
                    styles.btnColor2 +
                    " " +
                    styles.projectBtn
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div
              className={styles.detailsContainer + " " + styles.colorContainer}
            >
              <div className={styles.articleContainer}>
                <img
                  src="./assets/images/project-2.png"
                  alt="Project 2"
                  className={styles.projectImg}
                />
              </div>
              <h2
                className={
                  styles.experienceSubTitle + " " + styles.projectTitle
                }
              >
                Project Two
              </h2>
              <div className={styles.btnContainer}>
                <button
                  className={
                    styles.btn +
                    " " +
                    styles.btnColor2 +
                    " " +
                    styles.projectBtn
                  }
                >
                  Github
                </button>
                <button
                  className={
                    styles.btn +
                    " " +
                    styles.btnColor2 +
                    " " +
                    styles.projectBtn
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div
              className={styles.detailsContainer + " " + styles.colorContainer}
            >
              <div className={styles.articleContainer}>
                <img
                  src="./assets/images/project-3.png"
                  alt="Project 3"
                  className={styles.projectImg}
                />
              </div>
              <h2
                className={
                  styles.experienceSubTitle + " " + styles.projectTitle
                }
              >
                Project Three
              </h2>
              <div className={styles.btnContainer}>
                <button
                  className={
                    styles.btn +
                    " " +
                    styles.btnColor2 +
                    " " +
                    styles.projectBtn
                  }
                >
                  Github
                </button>
                <button
                  className={
                    styles.btn +
                    " " +
                    styles.btnColor2 +
                    " " +
                    styles.projectBtn
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/images/arrow.png"
          alt="Arrow icon"
          className={styles.arrow}
          onClick={props.scrollToSection}
        />
      </section>
    );
}

export default Projects