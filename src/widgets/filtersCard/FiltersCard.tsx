"use client";
import {
  useGetCinemasQuery,
  useGetMoviesQuery,
} from "@/redux/services/movieApi";
import styles from "./styles.module.css";
import { Dropdown } from "@/features/dropdown/Dropdown";
import { useContext } from "react";

export const FiltersCard = ({
  naming,
  setNaming,
  genre,
  setGenre,
  theatre,
  setTheatre,
}) => {
  const {
    data: cinemas,
    isLoading: cinemasIsLoading,
    error: cinemasError,
  } = useGetCinemasQuery();

  return (
    <div className={styles.filtersCard}>
      <h2 className={styles.heading}>Фильтр поиска</h2>

      <div className={styles.filtersContainer}>
        <div className={styles.inputContainer}>
          <label className={styles.text}>Название</label>
          <input
            className={naming == "" ? styles.inputInactive : styles.input}
            placeholder="Введите название"
            onChange={(e) => setNaming(e.target.value)}
            value={naming}
          ></input>
        </div>
        <Dropdown label="Жанр" choiceSender={setGenre}>
          <Dropdown.Header />
          <Dropdown.Menu>
            <Dropdown.Choice text="Не выбран" />
            <Dropdown.Choice text="action" />
            <Dropdown.Choice text="comedy" />
            <Dropdown.Choice text="fantasy" />
            <Dropdown.Choice text="horror" />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown label="Кинотеатр" choiceSender={setTheatre}>
          <Dropdown.Header />
          <Dropdown.Menu>
            <Dropdown.Choice text="Не выбран" />
            {(cinemasIsLoading ? [] : cinemas).map((obj) => (
              <Dropdown.Choice key={obj.id} id={obj.id} text={obj.name} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
