"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import img from "./placeholder_image.png";
import { Counter } from "@/features/counter/Counter";

export const BigFilmCard = () => {
  return (
    <section className={styles.container}>
      <Image className={styles.img} src={img} alt="img" />
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.heading}>Властелин колец: Братство кольца</h2>
          <Counter />
        </div>
        <div className={styles.infoContainer}>
          <div>
            <span className={styles.infoParam}>Жанр: </span>
            <span className={styles.infoDescription}>Фэнтези</span>
          </div>
          <div>
            <span className={styles.infoParam}>Год выпуска: </span>
            <span className={styles.infoDescription}>2001</span>
          </div>
          <div>
            <span className={styles.infoParam}>Рейтинг: </span>
            <span className={styles.infoDescription}>8</span>
          </div>
          <div>
            <span className={styles.infoParam}>Режиссер: </span>
            <span className={styles.infoDescription}>Питер Джексон</span>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.descriptionHeading}>Описание</h3>
          <p className={styles.description}>
            Сказания о Средиземье — это хроника Великой войны за Кольцо,
            длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал
            неограниченную власть, но был обязан служить злу. Тихая деревня, где
            живут хоббиты. Придя на 111-й день рождения к своему старому другу
            Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о
            кольце, которое Бильбо нашел много лет назад. Это кольцо
            принадлежало когда-то темному властителю Средиземья Саурону, и оно
            дает большую власть своему обладателю. Теперь Саурон хочет вернуть
            себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо,
            чтобы тот отнёс его к Роковой Горе и уничтожил.
          </p>
        </div>
      </div>
    </section>
  );
};
