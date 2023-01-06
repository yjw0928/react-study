import { Button, message } from "antd";
import React, { useMemo, useRef, useState } from "react";

const Demo0912: React.FC = () => {
  const [state, setState] = useState(0);

  let ref = useRef(1);

  const count = useMemo(() => {
    ref.current += 3;
    return ref.current;
  }, [ref.current]);

  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setState(Math.random());
          }}
        >
          改变state
        </Button>
        <Button
          onClick={() => {
            ref.current += 3;
          }}
        >
          改变ref值
        </Button>
        <div>useMemo值：{count}</div>
        <div>state:{state}</div>
        <div>ref:{ref.current}</div>
      </div>
      <div>
        <p>结论</p>
        <p>
          useMemo
          会在组件每次触发更新的时候重新计算，props变化或者state的变化，基于依赖项进行比较
        </p>
      </div>
    </div>
  );
};

export default Demo0912;
