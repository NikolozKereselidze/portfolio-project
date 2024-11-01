import { useState } from "react";
import navPhoto from "../../assets/main-photo.jpg";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [activeButton, setActiveButton] = useState("home");

  const toggleActive = (category) => {
    setActiveButton(category);
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.photoNameWrapper}>
        <div className={styles.photoWrapper}>
          <img src={navPhoto} alt="" />
        </div>

        <h2 className={styles.navHeader}>Nikoloz Kereselidze</h2>
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li className={styles.navList}>
            <a
              href="#home"
              onClick={() => {
                toggleActive("home");
              }}
              className={`${styles.pageLinks} ${
                activeButton === "home" ? styles.active : ""
              }`}
            >
              Home
            </a>
          </li>
          <li className={styles.navList}>
            <a
              href="#skills"
              onClick={() => {
                toggleActive("skills");
              }}
              className={`${styles.pageLinks} ${
                activeButton === "skills" ? styles.active : ""
              }`}
            >
              Skills
            </a>
          </li>
          <li className={styles.navList}>
            <a
              href="#projects"
              onClick={() => {
                toggleActive("projects");
              }}
              className={`${styles.pageLinks} ${
                activeButton === "projects" ? styles.active : ""
              }`}
            >
              Projects
            </a>
          </li>
          <li className={styles.navList}>
            <a
              href="#contact"
              onClick={() => {
                toggleActive("contact");
              }}
              className={`${styles.pageLinks} ${
                activeButton === "contact" ? styles.active : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <ul>
          <li className={styles.navList}>
            <a
              href="https://github.com/NikolozKereselidze"
              aria-label="Visit Nikoloz Kereselidze's GitHub profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className={styles.navList}>
            <a
              href="https://www.linkedin.com/in/nikoloz-kereselidze-259573232/"
              aria-label="Visit Nikoloz Kereselidze's Linkedin profile"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className={styles.navList}>
            <a
              href="https://x.com/Kereselidze_N"
              aria-label="Visit Nikoloz Kereselidze's X profile"
            >
              <i className="fa-brands fa-x"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Navigation;
