import { cartActions } from "@/redux/features/cart";
import styles from "./styles.module.css";
import { Counter } from "@/features/counter/Counter";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { Modal } from "@/features/modal/Modal";
import { useState } from "react";

export const FilmCard = ({ id, title, posterUrl, genre, isBasket = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  const modal = createPortal(
    <Modal setIsModalOpen={setIsModalOpen} filmId={id} />,
    document.body
  );

  return (
    <article className={isBasket ? styles.basketCard : styles.card}>
      {isModalOpen ? modal : null}
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
      <Counter setIsModalOpen={setIsModalOpen} filmId={id}></Counter>
      {isBasket ? (
        <button onClick={() => openModal()} className={styles.removeButton}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icons / close">
              <path
                id="Vector"
                d="M16.0673 15.1829C16.1254 15.241 16.1714 15.3099 16.2028 15.3858C16.2343 15.4617 16.2505 15.543 16.2505 15.6251C16.2505 15.7072 16.2343 15.7885 16.2028 15.8644C16.1714 15.9403 16.1254 16.0092 16.0673 16.0673C16.0092 16.1254 15.9403 16.1714 15.8644 16.2028C15.7885 16.2343 15.7072 16.2505 15.6251 16.2505C15.543 16.2505 15.4617 16.2343 15.3858 16.2028C15.3099 16.1714 15.241 16.1254 15.1829 16.0673L10.0001 10.8837L4.81729 16.0673C4.70002 16.1846 4.54096 16.2505 4.3751 16.2505C4.20925 16.2505 4.05019 16.1846 3.93292 16.0673C3.81564 15.95 3.74976 15.791 3.74976 15.6251C3.74976 15.4593 3.81564 15.3002 3.93292 15.1829L9.11651 10.0001L3.93292 4.81729C3.81564 4.70002 3.74976 4.54096 3.74976 4.3751C3.74976 4.20925 3.81564 4.05019 3.93292 3.93292C4.05019 3.81564 4.20925 3.74976 4.3751 3.74976C4.54096 3.74976 4.70002 3.81564 4.81729 3.93292L10.0001 9.11651L15.1829 3.93292C15.3002 3.81564 15.4593 3.74976 15.6251 3.74976C15.791 3.74976 15.95 3.81564 16.0673 3.93292C16.1846 4.05019 16.2505 4.20925 16.2505 4.3751C16.2505 4.54096 16.1846 4.70002 16.0673 4.81729L10.8837 10.0001L16.0673 15.1829Z"
                fill="#333333"
              />
            </g>
          </svg>
        </button>
      ) : null}
    </article>
  );
};
