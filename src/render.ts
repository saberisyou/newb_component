import React, {JSXElementConstructor} from "react";
import {createRoot} from "react-dom/client";

export function render(
  dom: HTMLElement,
  reactFc: JSXElementConstructor<any>,
  props = {}
) {
  createRoot(dom).render(React.createElement(reactFc, props));
}