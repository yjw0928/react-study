import React, { useEffect, useRef } from "react";

const a: UploadProps;
const Demo = () => {
  const ref = useRef();
  useEffect(() => {
    const dom1 = document.getElementById("eat");
    console.log(dom1); // undefind
    const dom2 = ref.current;
    console.log(dom2); // div
  }, []);

  return (
    <div ref={ref} id="eat">
      <h1>useEffect在组件初次挂载和组件重新渲染执行</h1>
      <h2>组件初次挂载执行的时候dom还没有渲染到document</h2>
    </div>
  );
};

export default Demo;
