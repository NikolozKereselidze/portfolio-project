import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.homeWrapper} id="home">
        <h4 className={styles.sectionInfo}>About Me</h4>
        <h2 className={styles.homeGreeting}>Hello, </h2>
        <p className={styles.homeAbout}>
          I am a Frontend web developer specializing in dynamic and interactive
          user interfaces, with a strong command of JavaScript, React, and Git.
          Passionate about continuous learning and delivering polished,
          high-performance experiences. My expertise ensures optimized and
          efficient solutions.
        </p>

        <div className={styles.buttons}>
          <button className={styles.cvButton}>
            <span>CV</span>
          </button>
          <button className={styles.hireButton}>
            <span>Hire Me</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;