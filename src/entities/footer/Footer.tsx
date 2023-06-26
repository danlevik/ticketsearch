import Link from "next/link";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <nav className={styles.navigation}>
        <ul className={styles.linkList}>
          <li className={styles.linkElement}>
            <Link className={styles.link} href="/faq">
              Вопросы-ответы
            </Link>
          </li>
          <li className={styles.linkElement}>
            <Link className={styles.link} href="/about">
              О нас
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
