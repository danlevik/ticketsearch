"use client";

import { FilmPage } from "@/pages/film/FilmPage";
import { useRouter } from "next/router";

export default function Film({ params }) {
  return <FilmPage id={params.id} />;
}
