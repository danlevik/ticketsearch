import { Footer } from "@/entities/footer/Footer";
import { Header } from "@/entities/header/Header";
import { BigFilmCard } from "@/widgets/bigFilmCard/BigFilmCard";
import styles from "./styles.module.css";
import { CommentaryCard } from "@/widgets/commentaryCard/CommentaryCard";

export const FilmPage = () => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <BigFilmCard />
        <CommentaryCard />
        <CommentaryCard />
        <CommentaryCard />
      </main>
      <Footer />
    </>
  );
};
