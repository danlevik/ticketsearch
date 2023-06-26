import styles from "./styles.module.css";
export const CommentaryCard = () => {
  return (
    <section className={styles.commentaryCard}>
      <div className={styles.img}></div>
      <div className={styles.textContainer}>
        <div className={styles.headingContainer}>
          <h3 className={styles.author}>Роман</h3>
          <span>Оценка: 8</span>
        </div>
        <p className={styles.commentary}>
          По счастью мне довелось посмотреть фильм раньше, чем прочесть книгу.
          Это было около четырех лет назад, но тот момент я вспоминаю и по сей
          день. До него я не был фанатом Джона Толкина, как впрочем, и всего
          фентези в целом, однако стоило мне посмотреть первые десять минут
          фильма и оставшиеся пролетели на одном дыхании. Я словно погрузился в
          необычайный мир, где добро борется со злом, где зеленые рощи
          перемежаются с поросшими мхом статуями и древними развалинами, в мир,
          где пробираясь лесною тропой можно встретить остроухих неувядающих
          эльфов или мерзких орков – кому как повезет...
        </p>
      </div>
    </section>
  );
};
