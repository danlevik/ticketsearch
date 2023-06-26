"use client";

import { useCallback, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/redux/features/cart";
import { selectFilmAmount } from "@/redux/features/cart/selector";

function useCount(initialValue: number = 0) {
  let [count, setCount] = useState(initialValue);
  // const dispatch = useDispatch();

  const decrement = useCallback(() => {
    setCount((currentCount) => {
      if (currentCount > 0) {
        return currentCount - 1;
      }
      return currentCount;
    });
  }, []);

  const increment = useCallback(() => {
    setCount((currentCount) => {
      if (currentCount < 30) {
        return currentCount + 1;
      }
      return currentCount;
    });
  }, []);

  return { count, decrement, increment };
}

export const Counter = ({ filmId }) => {
  const amount = useSelector((state) => selectFilmAmount(state, filmId));
  let { count, increment, decrement } = useCount(amount);

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button
        className={count !== 0 ? styles.button : styles.buttonDisabled}
        onClick={() => {
          decrement();
          dispatch(cartActions.decrement(filmId));
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icons / plus">
            <path
              id="Vector"
              d="M10.5 6C10.5 6.09946 10.4605 6.19484 10.3902 6.26517C10.3198 6.33549 10.2245 6.375 10.125 6.375H1.875C1.77554 6.375 1.68016 6.33549 1.60984 6.26517C1.53951 6.19484 1.5 6.09946 1.5 6C1.5 5.90054 1.53951 5.80516 1.60984 5.73484C1.68016 5.66451 1.77554 5.625 1.875 5.625H10.125C10.2245 5.625 10.3198 5.66451 10.3902 5.73484C10.4605 5.80516 10.5 5.90054 10.5 6Z"
              fill="white"
            />
          </g>
        </svg>
      </button>
      <span className={styles.counterText}>{count}</span>
      <button
        className={count !== 30 ? styles.button : styles.buttonDisabled}
        onClick={() => {
          increment();
          dispatch(cartActions.increment(filmId));
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icons / plus">
            <path
              id="Vector"
              d="M10.5 6C10.5 6.09946 10.4605 6.19484 10.3902 6.26517C10.3198 6.33549 10.2245 6.375 10.125 6.375H6.375V10.125C6.375 10.2245 6.33549 10.3198 6.26517 10.3902C6.19484 10.4605 6.09946 10.5 6 10.5C5.90054 10.5 5.80516 10.4605 5.73484 10.3902C5.66451 10.3198 5.625 10.2245 5.625 10.125V6.375H1.875C1.77554 6.375 1.68016 6.33549 1.60984 6.26517C1.53951 6.19484 1.5 6.09946 1.5 6C1.5 5.90054 1.53951 5.80516 1.60984 5.73484C1.68016 5.66451 1.77554 5.625 1.875 5.625H5.625V1.875C5.625 1.77554 5.66451 1.68016 5.73484 1.60984C5.80516 1.53951 5.90054 1.5 6 1.5C6.09946 1.5 6.19484 1.53951 6.26517 1.60984C6.33549 1.68016 6.375 1.77554 6.375 1.875V5.625H10.125C10.2245 5.625 10.3198 5.66451 10.3902 5.73484C10.4605 5.80516 10.5 5.90054 10.5 6Z"
              fill="white"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};
