import styles from "./Skills.module.css";
import skillsImages from "../skillsImageImport";

const Skills = () => {
  return (
    <section className={styles.skillsWrapper} id="skills">
      <div className={styles.content}>
        <h4 className="sectionInfo">My Skillset</h4>
        <div className={styles.imgWrapper}>
          <img src={skillsImages.html} alt="html icon" />
          <img src={skillsImages.css} alt="css icon" />
          <img src={skillsImages.js} alt="js icon" />
          <img src={skillsImages.react} alt="react icon" />
          <img src={skillsImages.webpack} alt="webpack icon" />
          <img src={skillsImages.jest} alt="jest icon" />
        </div>
      </div>
    </section>
  );
};

export default Skills;