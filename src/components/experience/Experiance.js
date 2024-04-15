import { Component } from "react";
import styles from './experience.module.css'

const Experiance=(props)=>{
    return (
      <section id={styles.experiance} name="experience" ref={props.refs}>
        <p className={styles.sectionTextP1}>Explore My</p>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.experienceDetailsContainer}>
          <div className={styles.aboutContainers}>
            <div className={styles.detailsContainer}>
              <h2 className={styles.experienceSubTitle}>
                Frontend Development
              </h2>
              <div className={styles.articleContainer}>
                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Angular</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>React</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className={styles.detailsContainer}>
              <h2 className={styles.experienceSubTitle}>Tools</h2>
              <div className={styles.articleContainer}>
                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Docker</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Figma</h3>
                    <p>Intermediate</p>
                  </div>
                </article>

                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Jira</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Keycloak</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/images/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Camunda</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
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
export default Experiance