import React, { useCallback, useContext, useState } from "react";
import styles from "./styles.module.css";

const MenuContext = React.createContext(false);

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
      <h3 className={styles.heading} onClick={() => switchGroup(title)}>
        {title}
      </h3>
      {activeGroup === title && <>{children}</>}
    </article>
  );
};

MenuAccordion.Item = function MenuItem({ text }) {
  return <p className={styles.text}>{text}</p>;
};
