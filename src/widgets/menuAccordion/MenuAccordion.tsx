import React, { useCallback, useContext, useState } from "react";
import styles from "./styles.module.css";

export const MenuContext = React.createContext(false);

export const MenuAccordion = ({ children }) => {
  const [activeGroup, setActiveGroup] = useState();

  const switchGroup = useCallback((title) => {
    setActiveGroup((activeTitle) =>
      activeTitle === title ? undefined : title
    );
  }, []);

  return (
    <MenuContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuAccordion.Group = function MenuGroup({ children, title }) {
  const { activeGroup, switchGroup } = useContext(MenuContext);

  return (
    <article className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.heading} onClick={() => switchGroup(title)}>
          {title}
        </h3>

        {activeGroup === title && <>{children}</>}
      </div>

      <svg
        onClick={() => switchGroup(title)}
        className={activeGroup === title ? styles.rotatedSvg : ""}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Icons / arrow">
          <path
            id="icon"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 1.66658L12 1.66658C4.75999 1.66658 1.66666 4.75992 1.66666 11.9999L1.66666 19.9999C1.66666 27.2399 4.75999 30.3333 12 30.3333L20 30.3333C27.24 30.3333 30.3333 27.2399 30.3333 19.9999L30.3333 11.9999C30.3333 4.75992 27.24 1.66658 20 1.66658ZM28.3333 19.9999C28.3333 26.1466 26.1467 28.3333 20 28.3333L12 28.3333C5.85333 28.3333 3.66666 26.1466 3.66666 19.9999L3.66666 11.9999C3.66666 5.85325 5.85333 3.66658 12 3.66658L20 3.66658C26.1467 3.66658 28.3333 5.85325 28.3333 11.9999L28.3333 19.9999ZM16.7067 12.4132C16.5067 12.2132 16.2533 12.1199 16 12.1199C15.7467 12.1199 15.4933 12.2132 15.2933 12.4132L10.5867 17.1199C10.2 17.5066 10.2 18.1466 10.5867 18.5332C10.9733 18.9199 11.6133 18.9199 12 18.5332L16 14.5332L20 18.5332C20.3867 18.9199 21.0267 18.9199 21.4133 18.5332C21.8 18.1466 21.8 17.5066 21.4133 17.1199L16.7067 12.4132Z"
            fill="#333333"
          />
        </g>
      </svg>
    </article>
  );
};

MenuAccordion.Item = function MenuItem({ text }) {
  return <p className={styles.text}>{text}</p>;
};
