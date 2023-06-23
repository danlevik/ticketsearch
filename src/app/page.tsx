import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/entities/header/Header";
import { Footer } from "@/entities/footer/Footer";
import { AboutPage } from "@/pages/about/AboutPage";

export default function Home() {
  return (
    <>
      <AboutPage></AboutPage>
    </>
  );
}
