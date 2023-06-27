import { Header } from "@/entities/header/Header";
import styles from "./styles.module.css";
import { Footer } from "@/entities/footer/Footer";
import { MenuAccordion } from "@/widgets/menuAccordion/MenuAccordion";

export const FaqPage = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <MenuAccordion>
          <h2 className={styles.title}>Вопросы-ответы</h2>
          <MenuAccordion.Group title="Что такое Билетопоиск?">
            <MenuAccordion.Item text="Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов." />
          </MenuAccordion.Group>
          <MenuAccordion.Group title="Какой компании принадлежит Билетопоиск?">
            <MenuAccordion.Item
              text="15
            октября 2013 года сервис купила компания «Яндекс» (размер сделки —
            $80 млн, около 2,6 млрд рублей на то время)."
            />
          </MenuAccordion.Group>
          <MenuAccordion.Group title="Как купить билет на Билетопоиск?">
            <MenuAccordion.Item text="Приложите кошелек к экрану." />
          </MenuAccordion.Group>
          <MenuAccordion.Group title="Как оставить отзыв на Билетопоиск">
            <MenuAccordion.Item text="Очень просто." />
          </MenuAccordion.Group>
        </MenuAccordion>
      </main>
      <Footer />
    </>
  );
};
