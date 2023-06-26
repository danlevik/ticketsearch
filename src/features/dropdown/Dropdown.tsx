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
    <div onClick={() => setIsOpen(!isOpen)} className={styles.dropdownHeader}>
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

Dropdown.Choice = function DropdownChoice({ text, id = null }) {
  let { choice, isOpen, switchChoice, switchOpen } =
    useContext(DropdownContext);

  return (
    <span className={styles.choice} onClick={() => switchChoice(text, id)}>
      {text}
    </span>
  );
};
