"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import default_photo from "./default_photo.svg";

import { Counter } from "@/features/counter/Counter";

export const BigFilmCard = ({
  title,
  posterUrl = default_photo,
  releaseYear,
  description,
  genre,
  rating,
  director,
}) => {
  return (
    <section className={styles.container}>
      <Image
        className={styles.img}
        width={400}
        height={500}
        src={posterUrl}
        alt="img"
      />
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.heading}>{title}</h2>
          <Counter />
        </div>
        <div className={styles.infoContainer}>
          <div>
            <span className={styles.infoParam}>Жанр: </span>
            <span className={styles.infoDescription}>{genre}</span>
          </div>
          <div>
            <span className={styles.infoParam}>Год выпуска: </span>
            <span className={styles.infoDescription}>{releaseYear}</span>
          </div>
          <div>
            <span className={styles.infoParam}>Рейтинг: </span>
            <span className={styles.infoDescription}>{rating}</span>
          </div>
          <div>
            <span className={styles.infoParam}>Режиссер: </span>
            <span className={styles.infoDescription}>{director}</span>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.descriptionHeading}>Описание</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
};
