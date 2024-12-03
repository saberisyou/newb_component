import React, { JSXElementConstructor } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Search from "./component/search/Search.tsx";
import Login from "./component/login/Login.tsx";
import Card3 from "./component/card/Card_3.tsx";
import Category from "./component/category/index.tsx";

function render(
  dom: HTMLElement,
  reactFc: JSXElementConstructor<any>,
  props = {}
) {
  createRoot(dom).render(React.createElement(reactFc, props));
}

export { Search, Login, Card3, Category, render };
