import Image from "next/image";
import styles from "./styles.module.css";
import defaultPhoto from "./default_photo.svg";

export const CommentaryCard = ({
  name,
  avatar = defaultPhoto,
  text,
  rating,
}) => {
  return (
    <section className={styles.commentaryCard}>
      <Image
        className={styles.img}
        width={400}
        height={500}
        src={avatar}
        alt="img"
      />

      <div className={styles.textContainer}>
        <div className={styles.headingContainer}>
          <h3 className={styles.author}>{name}</h3>
          <div>
            <span>Оценка: </span>
            <span>{rating}</span>
          </div>
        </div>
        <p className={styles.commentary}>{text}</p>
      </div>
    </section>
  );
};
