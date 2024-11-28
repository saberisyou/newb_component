// src/Search.tsx
import React from "react";
import "../login/styles.less";

const Search: React.FC = (props: any) => {
  return (
    <div>
      {props.name}
      <input type="text" placeholder="Search..." className='Search'/>
      <button>Search</button>
    </div>
  );
};

export default Search;
