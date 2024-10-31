import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
        <form
          method="POST"
          data-netlify-honeypot="bot-field"
          id="contact"
          name="contact"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.contactInfo}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className={styles.contactMessage}>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="7"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
