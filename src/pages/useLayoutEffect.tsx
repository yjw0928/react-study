import { Button } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";

const RenderFPS = () => {
  const [state, setState] = useState(1);

  useLayoutEffect(() => {
    alert("在页面重绘之前执行");
  }, [state]);

  useEffect(() => {
    alert("在页面重绘之后执行");
  }, [state]);

  return (
    <Button
      style={{
        width: state * 30,
      }}
      onClick={() => setState(state + 1)}
    >
      点击{state}
    </Button>
  );
};

export default RenderFPS;
