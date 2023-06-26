"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/entities/header/Header";
import { Footer } from "@/entities/footer/Footer";
import { AboutPage } from "@/pages/about/AboutPage";
import { FaqPage } from "@/pages/faq/FaqPage";
import { Counter } from "@/features/counter/Counter";
import { MainPage } from "@/pages/main/MainPage";
import { FilmPage } from "@/pages/film/FilmPage";

export default function Home() {
  return (
    <>
      <MainPage />
    </>
  );
}
