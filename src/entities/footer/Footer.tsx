import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <nav className={styles.navigation}>
        <ul className={styles.linkList}>
          <li className={styles.linkElement}>
            <a className={styles.link} href="#">
              Вопросы-ответы
            </a>
          </li>
          <li className={styles.linkElement}>
            <a className={styles.link} href="#">
              О нас
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
