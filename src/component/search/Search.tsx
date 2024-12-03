// src/Search.tsx
import React from "react";
import styles from "./styles.module.less";

export const Search: React.FC = (props: any) => {
  return (
    <div className={styles.search}>
      {props.name}
      <input type="text" placeholder="Search..." className="Search" />
      <button>Search</button>
    </div>
  );
};
