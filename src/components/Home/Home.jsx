import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.homeWrapper} id="home">
        <div className={styles.container}>
          <h4 className="sectionInfo">About Me</h4>
          <h2 className={styles.homeGreeting}>Hello, </h2>
          <p className={styles.homeAbout}>
            Front-End Developer passionate about crafting seamless, user-centric
            web experiences. With one year of practical experience, I specialize
            in building responsive and engaging interfaces using JavaScript and
            React. My expertise includes API integration, React Router for
            dynamic navigation, and advanced JavaScript techniques like
            async/await and promises, ensuring scalable and efficient solutions.
            Known for my attention to detail and problem-solving mindset, I
            excel at transforming complex challenges into intuitive,
            high-performance applications. Eager to bring fresh ideas and a
            commitment to excellence to your team let's create something
            impactful together!
          </p>

          <div className={styles.buttons}>
            <a
              href="/nikoloz-kereselidze-resume.pdf"
              download="Nikoloz-Kereselidze-CV.pdf"
              className={styles.cvButton}
            >
              <span>CV</span>
            </a>
            <a href="#contact">
              <button className={styles.hireButton}>
                <span>Hire Me</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
