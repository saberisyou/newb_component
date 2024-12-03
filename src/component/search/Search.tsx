// src/Search.tsx
import React from "react";
import "./styles.less";

export const Search: React.FC = (props: any) => {
  return (
    <div>
      {props.name}
      <input type="text" placeholder="Search..." className="Search" />
      <button>Search</button>
    </div>
  );
};
