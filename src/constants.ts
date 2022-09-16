import RenderProcess from "./components/20220829";
import LoopRender from "./components/20220908";
import Demo0912 from "./components/20220912";

export const PAGE_LIST = [
  {
    id: "20220829",
    title: "hook组件渲染过程",
    page: RenderProcess,
  },
  {
    id: "20220908",
    title: "多次修改state组件是如何渲染的",
    page: LoopRender,
  },
  {
    id: "20220912",
    title: "useMemo值变化页面是否渲染",
    page: Demo0912,
  },
];
