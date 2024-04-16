import styles from './contact.module.css';
import linkedin from "../../assets/images/linkedin.png";
import mail from "../../assets/images/email.png";

const Contact=(props)=>{
    return (
      <section id={styles.contact} name="contact" ref={props.refs}>
        <p className={styles.sectionTextP1}>Get in Touch</p>
        <h1 className={styles.title}>Contact Me</h1>
        <div
          className={styles.contactInfoUpperContainer}
          
        >
          <div className={styles.contactInfoContainer}>
            <img
              src={mail}
              alt="Email icon"
              className={
                styles.icon + " " + styles.ontactIcon + " " + styles.emailIcon
              }
            />
            <p>
              <a href="mailto:mulerian@gmail.com">mulerian@gmail.com</a>
            </p>
          </div>
          <div className={styles.contactInfoContainer}>
            <img
              src={linkedin}
              alt="LinkedIn icon"
              className={styles.icon + " " + styles.contactIcon}
            />
            <p>
              <a href="https://www.linkedin.com/mulukendemas">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    );
}
export default Contact