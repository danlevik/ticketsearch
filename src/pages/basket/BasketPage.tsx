import { Footer } from "@/entities/footer/Footer";
import { Header } from "@/entities/header/Header";
import { BigFilmCard } from "@/widgets/bigFilmCard/BigFilmCard";
import styles from "./styles.module.css";
import { CommentaryCard } from "@/widgets/commentaryCard/CommentaryCard";
import { FilmCard } from "@/widgets/filmCard/FilmCard";
import { useGetMoviesQuery } from "@/redux/services/movieApi";
import { selectFilmsInCart } from "@/redux/features/cart/selector";
import { useSelector } from "react-redux";
import { Modal } from "@/features/modal/Modal";
import { useState } from "react";
import { createPortal } from "react-dom";

export const BasketPage = () => {
  const filmIds = useSelector((state) => selectFilmsInCart(state));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: movies,
    isLoading: moviesIsLoading,
    error: moviesError,
  } = useGetMoviesQuery();

  const modal = createPortal(<Modal />, document.body);

  if (moviesError) {
    return <></>;
  }

  return (
    <>
      {isModalOpen ? modal : null}
      <Header />
      <main className={styles.container}>
        {(moviesIsLoading ? [] : movies)
          .filter((obj) => filmIds.includes(obj.id))
          .map((obj) => (
            <FilmCard
              id={obj.id}
              key={obj.id}
              title={obj.title}
              posterUrl={obj.posterUrl}
              genre={obj.genre}
              isBasket={true}
            />
          ))}
      </main>

      <Footer />
    </>
  );
};
