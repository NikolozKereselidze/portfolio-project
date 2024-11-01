import styles from "./Skills.module.css";
import skillsImages from "../skillsImageImport";

const Skills = () => {
  return (
    <section className={styles.skillsWrapper} id="skills">
      <div className={styles.content}>
        <h4 className="sectionInfo">My Skillset</h4>
        <div className={styles.imgWrapper}>
          <div className={styles.html}>
            <img src={skillsImages.html} alt="html icon" loading="lazy" />
          </div>
          <div className={styles.css}>
            <img src={skillsImages.css} alt="css icon" loading="lazy" />
          </div>
          <div className={styles.js}>
            <img src={skillsImages.js} alt="js icon" loading="lazy" />
          </div>
          <div className={styles.react}>
            <img src={skillsImages.react} alt="react icon" loading="lazy" />
          </div>
          <div className={styles.git}>
            <img src={skillsImages.git} alt="git icon" loading="lazy" />
          </div>
          <div className={styles.webpack}>
            <img src={skillsImages.webpack} alt="webpack icon" loading="lazy" />
          </div>
          <div className={styles.jest}>
            <img src={skillsImages.jest} alt="jest icon" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
