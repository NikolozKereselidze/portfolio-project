import navPhoto from "../../assets/main-photo.jpg";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.photoWrapper}>
        <img src={navPhoto} alt="" />
      </div>

      <h2 className={styles.navHeader}>Nikoloz Kereselidze</h2>

      <nav className={styles.navigation}>
        <ul>
          <li className={styles.navList}>
            <a href="#home" className={styles.pageLinks}>
              Home
            </a>
          </li>
          <li className={styles.navList}>
            <a href="#skills" className={styles.pageLinks}>
              Skills
            </a>
          </li>
          <li className={styles.navList}>
            <a href="#projects" className={styles.pageLinks}>
              Projects
            </a>
          </li>
          <li className={styles.navList}>
            <a href="#contact" className={styles.pageLinks}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <ul>
          <li className={styles.navList}>
            <a href="https://github.com/NikolozKereselidze">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className={styles.navList}>
            <a href="https://www.linkedin.com/in/nikoloz-kereselidze-259573232/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className={styles.navList}>
            <a href="https://x.com/Kereselidze_N">
              <i className="fa-brands fa-x"></i>
            </a>
          </li>
        </ul>
        <h4>&#169; 2024 Nikoloz Kereselidze</h4>
      </div>
    </aside>
  );
};

export default Navigation;
