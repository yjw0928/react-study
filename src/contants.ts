import { Git_MENU } from "./git/constants";
import { JS_MENU } from "./javascript/contants";
import { REACT_MENU } from "./react/constants";
import { RXJS_MENU } from "./rxjs/constants";
import { DESIGN_MODE } from "./design-pattern/contants";

export const ALL_PAGE = [
  ...REACT_MENU,
  ...JS_MENU,
  ...Git_MENU,
  ...RXJS_MENU,
  ...DESIGN_MODE,
];

export const menuData = [
  {
    key: "javascript",
    label: "JavaScript",
    children: JS_MENU,
  },
  {
    key: "designmode",
    label: "设计模式",
    children: DESIGN_MODE,
  },
  {
    key: "react",
    label: "React",
    children: REACT_MENU,
  },

  {
    key: "git",
    label: "Git",
    children: Git_MENU,
  },
  {
    key: "rxjs",
    label: "Rxjs",
    children: RXJS_MENU,
  },
];
