"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import default_photo from "./default_photo.svg";

import { Counter } from "@/features/counter/Counter";
import { useState } from "react";
import { Modal } from "@/features/modal/Modal";
import { createPortal } from "react-dom";

export const BigFilmCard = ({
  id,
  title,
  posterUrl = default_photo,
  releaseYear,
  description,
  genre,
  rating,
  director,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modal = createPortal(
    <Modal setIsModalOpen={setIsModalOpen} filmId={id} />,
    document.body
  );
  return (
    <section className={styles.container}>
      {isModalOpen ? modal : null}

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
          <Counter setIsModalOpen={setIsModalOpen} filmId={id} />
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
