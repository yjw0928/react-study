import React, { useCallback, useState } from "react";
import { Button } from "antd";
import { STR } from "../common/constants";

const LoopRender = () => {
  const [state, setState] = useState("");
  const [like, setLike] = useState("");
  console.log(STR);
  const wait = (i: number) => {
    return new Promise((resolve, reject) => {
      setState(`state${i}`);
      setLike(`like:${i}`);
      resolve(i);
    });
  };

  const onClick = useCallback(() => {
    for (let i = 0; i < 10; i++) {
      setState(`state${i}`);
      setLike(`like:${i}`);
    }
  }, []);

  const onAsyncClick = useCallback(async () => {
    for (let i = 0; i < 10; i++) {
      await wait(i);
    }
  }, []);

  console.log(`state:${state}`);
  console.log(`like:${like}`);

  return (
    <div>
      <Button onClick={onClick}>同步setState</Button>
      <p>
        同步修改state：{state} like：{like}
      </p>
      <br />
      <Button onClick={onAsyncClick}>异步setState</Button>
      <p>
        异步修改state：{state} like:{like}
      </p>

      <p>结论</p>
      <p>同一个函数中多次进行setState时同步只会渲染一次，异步会进行多次渲染</p>

      <p>了解setState的原理</p>
    </div>
  );
};

export default LoopRender;
