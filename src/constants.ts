import Demo1 from "./study/react/1";

import JSDemo1 from "./study/javascript/1";
import JSDemo2 from "./study/javascript/2";
import JSDemo3 from "./study/javascript/3";

const REACT_MENU = [
  {
    key: "20220829",
    label: "hook组件渲染流程",
    page: Demo1,
  },
];

const JAVASCRIPT = [
  {
    key: "20230106",
    label: "javascripz执行机制",
    page: JSDemo1,
  },
  {
    key: "20230107",
    label: "事件循环",
    page: JSDemo2,
  },
  {
    key: "20230108",
    label: "迭代器和生成器",
    page: JSDemo3,
  },
];

export const ALL_PAGE = [...REACT_MENU, ...JAVASCRIPT];

export const menuData = [
  {
    key: "react",
    label: "React",
    children: REACT_MENU,
  },
  {
    key: "javascript",
    label: "JavaScript",
    children: JAVASCRIPT,
  },
];
