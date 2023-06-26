"use client";

import React from "react";
import styles from "./styles.module.css";
import { Header } from "@/entities/header/Header";
import { Footer } from "@/entities/footer/Footer";
import { FilmCard } from "@/widgets/filmCard/FilmCard";
import { FiltersCard } from "@/widgets/filtersCard/FiltersCard";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className={styles.layout}>
        <FiltersCard />
        <div className={styles.catalogContainer}>
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
        </div>
      </main>
      <Footer />
    </>
  );
};
