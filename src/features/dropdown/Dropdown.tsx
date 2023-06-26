"use client";

import React, { useCallback, useContext, useRef, useState } from "react";
import styles from "./styles.module.css";
import { createPortal } from "react-dom";

const DropdownContext = React.createContext(false);

export const Dropdown = ({ children, label, choiceSender }) => {
  let [choice, setChoice] = useState("Не выбран");
  let [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(document.body);

  const switchChoice = useCallback((text: string, id = null) => {
    console.log(text);

    setChoice(text);
    setIsOpen(false);

    if (id != null) {
      choiceSender(id);
    } else {
      choiceSender(text);
    }
  }, []);

  return (
    <DropdownContext.Provider
      value={{ choice, isOpen, menuRef, switchChoice, setIsOpen }}
    >
      <div ref={menuRef} className={styles.dropdownContainer}>
        <label className={styles.text}>{label}</label>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Header = function DropdownHeader() {
  let { choice, setIsOpen, isOpen } = useContext(DropdownContext);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={isOpen ? styles.dropdownHeaderFocus : styles.dropdownHeader}
    >
      <span
        className={
          choice == "Не выбран"
            ? styles.dropdownHeaderTextInactive
            : styles.dropdownHeaderText
        }
      >
        {choice}
      </span>
      {isOpen ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="20px/arrow-square-up">
            <path
              id="icon"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.50008 18.9583H12.5001C17.0251 18.9583 18.9584 17.025 18.9584 12.5V7.49996C18.9584 2.97496 17.0251 1.04163 12.5001 1.04163H7.50008C2.97508 1.04163 1.04175 2.97496 1.04175 7.49996V12.5C1.04175 17.025 2.97508 18.9583 7.50008 18.9583ZM2.29175 7.49996C2.29175 3.65829 3.65841 2.29163 7.50008 2.29163H12.5001C16.3417 2.29163 17.7084 3.65829 17.7084 7.49996V12.5C17.7084 16.3416 16.3417 17.7083 12.5001 17.7083H7.50008C3.65841 17.7083 2.29175 16.3416 2.29175 12.5V7.49996ZM12.5001 11.6583C12.6251 11.7833 12.7834 11.8417 12.9418 11.8417C13.1001 11.8417 13.2584 11.7833 13.3834 11.6583C13.6251 11.4167 13.6251 11.0167 13.3834 10.775L10.4418 7.83335C10.2001 7.59168 9.80009 7.59168 9.55842 7.83335L6.61675 10.775C6.37508 11.0167 6.37508 11.4167 6.61675 11.6583C6.85842 11.9 7.25842 11.9 7.50008 11.6583L10.0001 9.15835L12.5001 11.6583Z"
              fill="#999FA6"
            />
          </g>
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="20px/arrow-square-down">
            <path
              id="icon"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.49999 18.9583H12.5C17.025 18.9583 18.9583 17.025 18.9583 12.5V7.49996C18.9583 2.97496 17.025 1.04163 12.5 1.04163H7.49999C2.97499 1.04163 1.04166 2.97496 1.04166 7.49996V12.5C1.04166 17.025 2.97499 18.9583 7.49999 18.9583ZM2.29166 7.49996C2.29166 3.65829 3.65832 2.29163 7.49999 2.29163H12.5C16.3417 2.29163 17.7083 3.65829 17.7083 7.49996V12.5C17.7083 16.3416 16.3417 17.7083 12.5 17.7083H7.49999C3.65832 17.7083 2.29166 16.3416 2.29166 12.5V7.49996ZM9.55833 12.2417C9.68333 12.3667 9.84166 12.4251 9.99999 12.4251C10.1583 12.4251 10.3167 12.3667 10.4417 12.2417L13.3833 9.30006C13.625 9.05839 13.625 8.65839 13.3833 8.41672C13.1417 8.17506 12.7417 8.17506 12.5 8.41672L9.99999 10.9167L7.49999 8.41672C7.25833 8.17506 6.85833 8.17506 6.61666 8.41672C6.37499 8.65839 6.37499 9.05839 6.61666 9.30006L9.55833 12.2417Z"
              fill="#999FA6"
            />
          </g>
        </svg>
      )}
    </div>
  );
};

Dropdown.Menu = function DropdownMenu({ children }) {
  let { isOpen, menuRef } = useContext(DropdownContext);
  const menu = createPortal(
    <div className={styles.dropdownMenu}>{children}</div>,
    menuRef.current
  );
  return <>{isOpen ? menu : undefined}</>;
};

Dropdown.Choice = function DropdownChoice({ text, id = null }) {
  let { choice, isOpen, switchChoice, switchOpen } =
    useContext(DropdownContext);

  return (
    <span className={styles.choice} onClick={() => switchChoice(text, id)}>
      {text}
    </span>
  );
};
