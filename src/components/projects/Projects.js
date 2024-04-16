import { Component } from "react";
import styles from "./projects.module.css";
import arrow from '../../assets/images/arrow.png';

const Projects = (props) => {
  return (
    <section id={styles.projects} name="projects" ref={props.refs}>
      <p className={styles.sectionTextP1}>My Recent</p>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.experienceDetailsContainer}>
        <div className={styles.aboutContainers}>
          <div
            className={styles.detailsContainer + " " + styles.colorContainer}
          >
            <div className={styles.articleContainer}>
              <h3>UoG Alumni Forum</h3>
              <p>
                A forum web application that will help the University of Gondar
                community to interact and discuss with alumni or former students
                and Staffs about any academic issues including questions and
                answers. Has features like event management, forum discussion
                panel
              </p>
            </div>
           
          </div>
          <div
            className={styles.detailsContainer + " " + styles.colorContainer}
          >
            <div className={styles.articleContainer}>
              <h3>Business Process Management</h3>
              <p>
                A platform designed to help organizations optimize their
                business processes. It achieves this by providing features such
                as process modeling, task management, document management, and
                reporting. Process modeling allows businesses to visualize and
                design their workflows in a way that makes sense for their
                specific needs
              </p>
            </div>
           
          </div>
          <div
            className={styles.detailsContainer + " " + styles.colorContainer}
          >
            <div className={styles.articleContainer}>
              <h3>Thesis Management System</h3>
              <p>
                The project thesis process management system was designed to
                help students and faculty manage the process of completing a
                thesis project. The system included features for tracking the
                progress of the project, managing deadlines and milestones, and
                facilitating communication between students and faculty members.
              </p>
            </div>
           
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className={styles.arrow}
        onClick={props.scrollToSection}
      />
    </section>
  );
};

export default Projects;
