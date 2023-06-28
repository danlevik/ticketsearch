"use client";

import { FilmPage } from "@/page/film/FilmPage";

export default function Film({ params }) {
  return <FilmPage id={params.id} />;
}
