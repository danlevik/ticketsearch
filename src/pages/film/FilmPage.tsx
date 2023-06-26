"use client";

import { Footer } from "@/entities/footer/Footer";
import { Header } from "@/entities/header/Header";
import { BigFilmCard } from "@/widgets/bigFilmCard/BigFilmCard";
import styles from "./styles.module.css";
import { CommentaryCard } from "@/widgets/commentaryCard/CommentaryCard";
import {
  useGetMovieCommentsQuery,
  useGetMovieQuery,
} from "@/redux/services/movieApi";

export const FilmPage = ({ id }) => {
  const {
    data: movie,
    isLoading: movieIsLoading,
    error: movieError,
  } = useGetMovieQuery(id);

  const {
    data: comments,
    isLoading: commentsIsLoading,
    error: commentError,
  } = useGetMovieCommentsQuery(id);

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        {movieIsLoading ? null : (
          <BigFilmCard
            title={movie.title}
            releaseYear={movie.releaseYear}
            posterUrl={movie.posterUrl}
            description={movie.description}
            genre={movie.genre}
            rating={movie.rating}
            director={movie.director}
          />
        )}
        {(commentsIsLoading ? [] : comments).map((obj) => (
          <CommentaryCard
            key={obj.id}
            name={obj.name}
            text={obj.text}
            rating={obj.rating}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};
