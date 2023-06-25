"use client";

import React, { useCallback, useContext, useRef, useState } from "react";
import styles from "./styles.module.css";
import { createPortal } from "react-dom";

const DropdownContext = React.createContext(false);

export const Dropdown = ({ children, label }) => {
  let [choice, setChoice] = useState("Не выбран");
  let [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(document.body);

  const switchOpen = useCallback(() => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }, []);

  const switchChoice = useCallback((text: string) => {
    setChoice(text);
    setIsOpen(false);
  }, []);

  return (
    <DropdownContext.Provider
      value={{ choice, isOpen, menuRef, switchChoice, switchOpen }}
    >
      <div ref={menuRef} className={styles.dropdownContainer}>
        <label className={styles.text}>{label}</label>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Header = function DropdownHeader() {
  let { choice, switchOpen } = useContext(DropdownContext);
  return (
    <div onClick={() => switchOpen()} className={styles.dropdownHeader}>
      <span className={styles.dropdownHeaderText}>{choice}</span>
      <button className={styles.dropdownHeaderButton}>+</button>
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

Dropdown.Choice = function DropdownChoice({ text }) {
  let { choice, isOpen, switchChoice, switchOpen } =
    useContext(DropdownContext);

  return (
    <span className={styles.choice} onClick={() => switchChoice(text)}>
      {text}
    </span>
  );
};
