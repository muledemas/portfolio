import { Component } from "react";
import styles from './experience.module.css'

const Experiance=()=>{
    return (
      <section id={styles.experiance}>
        <p className={styles.sectionTextP1}>Explore My</p>
        <h1 className={styles.title}>Experience</h1>
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
                    <h3>SASS</h3>
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
                    <h3>TypeScript</h3>
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
                    <h3>PostgreSQL</h3>
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
                    <h3>Node JS</h3>
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
                    <h3>Express JS</h3>
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
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/images/arrow.png"
          alt="Arrow icon"
          className={styles.icon + " " + styles.arrow}
        />
      </section>
    );
}
export default Experiance