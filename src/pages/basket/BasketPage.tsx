import { Footer } from "@/entities/footer/Footer";
import { Header } from "@/entities/header/Header";
import { BigFilmCard } from "@/widgets/bigFilmCard/BigFilmCard";
import styles from "./styles.module.css";
import { CommentaryCard } from "@/widgets/commentaryCard/CommentaryCard";
import { FilmCard } from "@/widgets/filmCard/FilmCard";

export const BasketPage = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </main>

      <Footer />
    </>
  );
};
