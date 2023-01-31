import { JS_MENU } from "./javascript/contants";
import { REACT_MENU } from "./react/constants";

export const ALL_PAGE = [...REACT_MENU];

export const menuData = [
  {
    key: "react",
    label: "React",
    children: REACT_MENU,
  },
  {
    key: "javascript",
    label: "JavaScript",
    children: JS_MENU,
  },
];
