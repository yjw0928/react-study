import React, { useCallback, useEffect, useState } from "react";
import { Button } from "antd";
import { render } from "react-dom";

const SubComp: React.FC = () => {
  console.log("subCompRemder");
  const [count, setCount] = useState<number>(0);

  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    console.log("subUseEffect", count);
  }, [count]);

  return <Button onClick={add}>子组件{count}</Button>;
};

const RenderProcess = () => {
  console.log("start-render");
  const [state, setState] = useState<number>(0);
  console.log("state", state);
  const add = useCallback(() => {
    setState(state + 1);
  }, [state]);

  useEffect(() => {
    console.log("useEffect", state);
  }, [state]);
  console.log("renderPage", state);
  return (
    <div>
      <Button onClick={add}>计数{state}</Button>
      <SubComp />
    </div>
  );
};

export default RenderProcess;
