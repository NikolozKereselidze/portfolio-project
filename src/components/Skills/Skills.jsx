import { useState } from "react";
import styles from "./Skills.module.css";
import skillsImages from "../skillsImageImport";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const skills = [
    { name: "HTML", img: skillsImages.html },
    { name: "CSS", img: skillsImages.css },
    { name: "JS", img: skillsImages.js },
    { name: "React", img: skillsImages.react },
    { name: "Git", img: skillsImages.git },
    { name: "Webpack", img: skillsImages.webpack },
    { name: "Jest", img: skillsImages.jest },
  ];

  const handleMouseEnter = (skill) => {
    setHoveredSkill(skill);
  };

  const handleMouseMove = (e) => {
    const wrapper = document.querySelector(`.${styles.skillsWrapper}`);
    const rect = wrapper.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section className={styles.skillsWrapper} id="skills">
      <div className={styles.content}>
        <h4 className="sectionInfo">My Skillset</h4>
        <div className={styles.imgWrapper}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${styles.skill} ${styles[skill.name.toLowerCase()]}`}
              onMouseEnter={() => handleMouseEnter(skill.name)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img src={skill.img} alt={`${skill.name} icon`} loading="lazy" />
            </div>
          ))}
        </div>
        {hoveredSkill && (
          <div
            className={styles.hoveredSkillName}
            style={{ top: position.y + 10, left: position.x + 10 }}
          >
            {hoveredSkill}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
