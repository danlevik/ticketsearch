import { Header } from "@/entities/header/Header";
import styles from "./styles.module.css";
import { Footer } from "@/entities/footer/Footer";

export const AboutPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <section className={styles.aboutContainer}>
          <h2 className={styles.header}>О нас</h2>
          <p className={styles.paragraph}>
            Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
            фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
            видео и интересные факты, поставить фильмам оценки, написать
            рецензии и дополнить описание фильмов.
          </p>
          <p className={styles.paragraph}>
            был запущен в 2003 году. Портал предоставляет пользователям
            информацию о фильмах и их создателях, новости кино, интервью с
            актерами и другими знаменитостями, рецензии пользователей,
            расписание сеансов в кинотеатрах, ТВ-программу и другие разделы.
          </p>
          <p className={styles.paragraph}>
            Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и
            Дмитрий Суханов. Владельцем проекта являлась компания ООО
            «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций
            принадлежало её совладельцу — французской компании ООО AlloCiné. 15
            октября 2013 года сервис купила компания «Яндекс» (размер сделки —
            $80 млн, около 2,6 млрд рублей на то время).
          </p>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};
