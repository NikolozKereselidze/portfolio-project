import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactWrapper} id="contact">
      <div className="">
        <h4 className="sectionInfo">Contact Me</h4>
        <div className={styles.contactDetailsWrapper}>
          <div className={styles.contactDetails}>
            <i className="fa-solid fa-phone"></i>
            <h4 className={styles.textHeading}>Phone</h4>
            <h4 className={styles.textDetails}>+995 597-35-35-77</h4>
          </div>

          <div className={styles.contactDetails}>
            <i className="fa-solid fa-envelope"></i>
            <h4 className={styles.textHeading}>Email</h4>
            <h4 className={styles.textDetails}>
              kereselidze.nikoloz7@gmail.com
            </h4>
          </div>

          <div className={styles.contactDetails}>
            <i className="fa-solid fa-location-dot"></i>
            <h4 className={styles.textHeading}>Location</h4>
            <h4 className={styles.textDetails}>Tbilisi, Georgia</h4>
          </div>
        </div>
        <form action="POST" data-netlify="true">
          <div className={styles.contactInfo}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>
          <div className={styles.contactMessage}>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="7"
              required
            ></textarea>
          </div>
          <div className={styles.contactFile}>
            <input
              type="file"
              name="appform"
              id="appform"
              placeholder="Application Form"
            />
          </div>
          <div data-netlify-recaptcha="true"></div>
          <div className={styles.contactSubmit}>
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
