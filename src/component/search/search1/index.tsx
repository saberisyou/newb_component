// src/Index.tsx
import React from "react";
import styles from "./styles.module.less";

 const Search: React.FC = (props: any) => {
  return (
    <div className={styles.search}>
      {props.name}
      <input type="text" placeholder="Index..." className="Search" />
      <button>Index</button>
    </div>
  );
};
export default Search;