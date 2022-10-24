import { Button } from "antd";
import React, { useCallback, useState } from "react";
import { arrayToDict } from "yatool";

const Demo20221024: React.FC = () => {
  const [dict, setDict] = useState("");

  const test = useCallback(() => {
    const a = [
      { id: 1, a: 2 },
      { id: 2, a: 3 },
    ];
    const dict = arrayToDict(a, "id");
    setDict(JSON.stringify(dict));
  }, []);

  return (
    <div>
      <Button onClick={test}>测试</Button>
      <span>{dict}</span>
    </div>
  );
};

export default Demo20221024;
