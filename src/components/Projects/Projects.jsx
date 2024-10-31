import styles from "./Projects.module.css";
import { useState } from "react";
import CombinedCard from "../Card/CombinedCard";
import ReactCard from "../Card/ReactCard";
import JsCard from "../Card/JsCard";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeButton, setActiveButton] = useState("all");

  const toggleActive = (category) => {
    setActiveButton(category);
  };

  return (
    <section className={styles.projectsWrapper} id="projects">
      <div className="">
        <h4 className="sectionInfo">My Projects</h4>
        <div className={styles.projectsHeadings}>
          <button
            onClick={() => toggleActive("all")}
            className={`${styles.projectsButton} ${
              activeButton === "all" ? styles.active : ""
            }`}
          >
            Everything
          </button>
          <button
            onClick={() => toggleActive("js")}
            className={`${styles.projectsButton} ${
              activeButton === "js" ? styles.active : ""
            }`}
          >
            Javascript
          </button>
          <button
            onClick={() => toggleActive("react")}
            className={`${styles.projectsButton} ${
              activeButton === "react" ? styles.active : ""
            }`}
          >
            React
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className={styles.cardWrapper}
            key={activeButton}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
          >
            {activeButton === "all" && <CombinedCard />}
            {activeButton === "js" && <JsCard />}
            {activeButton === "react" && <ReactCard />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
