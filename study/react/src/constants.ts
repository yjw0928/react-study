import Demo1 from "./pages/1";

const REACT_MENU = [
  {
    key: "20220829",
    label: "hook组件渲染流程",
    page: Demo1,
  },
];

const NODE = [
  {
    key: "20230107",
    label: "回调函数和事件循环",
    page: "nodeDemo1",
  },
];

export const ALL_PAGE = [...REACT_MENU];

export const menuData = [
  {
    key: "react",
    label: "React",
    children: REACT_MENU,
  },
  // {
  //   key: "javascript",
  //   label: "JavaScript",
  //   children: JAVASCRIPT,
  // },
];
