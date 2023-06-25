import styles from "./styles.module.css";
import { Counter } from "@/features/counter/Counter";
import Image from "next/image";
import placeholderImage from "./placeholder_cover.png";

export const FilmCard = () => {
  return (
    <article className={styles.card}>
      <Image
        className={styles.filmImage}
        src={placeholderImage}
        height={120}
        width={100}
        alt="Picture"
      />
      <div className={styles.infoContainer}>
        <h3 className={styles.heading}>Властелин колец: Братство кольца</h3>
        <span className={styles.genre}>Фэнтези</span>
      </div>
      <Counter></Counter>
    </article>
  );
};
