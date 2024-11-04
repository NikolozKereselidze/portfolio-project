import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.homeWrapper} id="home">
        <div className={styles.container}>
          <h4 className="sectionInfo">About Me</h4>
          <h2 className={styles.homeGreeting}>Hello, </h2>
          <p className={styles.homeAbout}>
            Front-End Developer with a focus on creating dynamic, interactive
            user experiences. With one year of hands-on experience, I excel in
            leveraging JavaScript and React to build responsive interfaces that
            engage users. My proficiency in working with APIs and React Router,
            along with a solid understanding of JavaScript concepts like
            async/await and promises, enables me to develop efficient and
            scalable solutions. I am committed to continuous learning and thrive
            on turning complex challenges into polished, high-performance web
            applications. Let's connect and explore how I can contribute to your
            team!
          </p>

          <div className={styles.buttons}>
            <a
              href="/nikoloz-kereselidze-cv.pdf"
              download="Nika-Kereselidze-CV.pdf"
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
