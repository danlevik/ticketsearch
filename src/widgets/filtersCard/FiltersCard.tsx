"use client";
import styles from "./styles.module.css";
import { Dropdown } from "@/features/dropdown/Dropdown";

export const FiltersCard = () => {
  return (
    <div className={styles.filtersCard}>
      <h2 className={styles.heading}>Фильтр поиска</h2>
      <div className={styles.filtersContainer}>
        <div className={styles.inputContainer}>
          <label className={styles.text}>Название</label>
          <input
            className={styles.input}
            placeholder="Введите название"
          ></input>
        </div>
        <Dropdown label="Жанр">
          <Dropdown.Header />
          <Dropdown.Menu>
            <Dropdown.Choice text="Не выбран" />
            <Dropdown.Choice text="Боевик" />
            <Dropdown.Choice text="Комедия" />
            <Dropdown.Choice text="Фэнтези" />
            <Dropdown.Choice text="Ужасы" />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown label="Кинотеатр">
          <Dropdown.Header />
          <Dropdown.Menu>
            <Dropdown.Choice text="Не выбран" />
            <Dropdown.Choice text="Восток" />
            <Dropdown.Choice text="Запад" />
            <Dropdown.Choice text="Юг" />
            <Dropdown.Choice text="Север" />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
