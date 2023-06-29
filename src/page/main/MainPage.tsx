"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Header } from "@/entities/header/Header";
import { Footer } from "@/entities/footer/Footer";
import { FilmCard } from "@/widgets/filmCard/FilmCard";
import { FiltersCard } from "@/widgets/filtersCard/FiltersCard";
import { useDispatch } from "react-redux";
import {
  useGetCinemaMoviesQuery,
  useGetMoviesQuery,
} from "@/redux/services/movieApi";

export const MainPage = () => {
  const [naming, setNaming] = useState("");
  const [genre, setGenre] = useState("Не выбран");
  const [theatre, setTheatre] = useState("Не выбран");

  const {
    data: movies,
    isLoading: moviesIsLoading,
    error: moviesError,
  } = useGetCinemaMoviesQuery(theatre);

  return (
    <>
      <Header />
      <main className={styles.layout}>
        <div className={styles.filtersCardContainer}>
          <FiltersCard
            naming={naming}
            setNaming={setNaming}
            setGenre={setGenre}
            setTheatre={setTheatre}
          />
        </div>
        <div className={styles.catalogContainer}>
          {(moviesIsLoading ? [] : movies)
            .filter((obj) => obj.title.includes(naming))
            .filter((obj) => obj.genre == genre || genre == "Не выбран")
            .map((obj) => (
              <FilmCard
                id={obj.id}
                key={obj.id}
                title={obj.title}
                posterUrl={obj.posterUrl}
                genre={obj.genre}
              />
            ))}
        </div>
      </main>

      <Footer />
    </>
  );
};
