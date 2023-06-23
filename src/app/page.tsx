import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/entities/header/Header";
import { Footer } from "@/entities/footer/Footer";
import { AboutPage } from "@/pages/about/AboutPage";
import { FaqPage } from "@/pages/faq/FaqPage";

export default function Home() {
  return (
    <>
      <FaqPage></FaqPage>
    </>
  );
}
