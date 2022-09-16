import { Button } from "antd";
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
            setState(state + 1);
          }}
        >
          {count}
        </Button>
      </div>
      <div>
        <p>结论</p>
        <p>非state值变化useMemo计算值页面不会重新渲染</p>
        <p>每次渲染的时候根据依赖值的变化会重新计算，本身不会主动触发渲染</p>
      </div>
    </div>
  );
};

export default Demo0912;
