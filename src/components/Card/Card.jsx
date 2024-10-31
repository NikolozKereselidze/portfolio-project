import styles from "./Card.module.css";

/* eslint-disable react/prop-types */
const Card = ({ href, src, title, subtitle, mode }) => {
  return (
    <a href={href} className={styles.cardLink} target="_blank">
      <img src={src} className={styles.cardImg} />
      <div className={styles.details}>
        <h4 className={`${styles.title} ${mode ? styles[mode] : ""}`}>
          {title}
        </h4>
        <h4 className={`${styles.title} ${mode ? styles[mode] : ""}`}>
          {subtitle}
        </h4>
      </div>
    </a>
  );
};

export default Card;
