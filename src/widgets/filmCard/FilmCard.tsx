import styles from "./styles.module.css";
import { Counter } from "@/features/counter/Counter";
import Image from "next/image";
import Link from "next/link";

export const FilmCard = ({ id, title, posterUrl, genre }) => {
  return (
    <article className={styles.card}>
      <Image
        className={styles.filmImage}
        src={posterUrl}
        height={120}
        width={100}
        alt="Picture"
      />
      <div className={styles.infoContainer}>
        <h3 className={styles.heading}>
          <Link href={`film/${id}`}>{title}</Link>
        </h3>
        <span className={styles.genre}>{genre}</span>
      </div>
      <Counter filmId={id}></Counter>
    </article>
  );
};
