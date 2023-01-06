import { Button, message, Tabs } from "antd";
import React, { useCallback, useState } from "react";

const CompRender = () => {
  return (
    <div>
      <h4>组件的重新渲染，props变化， state变化, useContext值变化</h4>
    </div>
  );
};

const StateDemo = () => {
  const [eat, setEat] = useState<string>();
  const [drink, setDrink] = useState<string>();

  const handleSync = useCallback(() => {
    setEat("汉堡");
    for (let i = 0; i < 100000001; i++) {
      if (i === 100000000) {
        setDrink(`可乐${i}`);
      }
    }
  }, []);

  const handleAsync = useCallback(() => {
    setEat("火锅");
    const a = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("雪碧");
        }, 1000);
      });
    };
    a().then((res: string) => {
      setDrink(res);
    });
  }, []);
  return (
    <div>
      <h4>
        state变化重新渲染，多个setState会被合并，异步任务中的每次变化都会重新渲染
      </h4>
      <Button onClick={handleSync}>同步吃喝</Button>
      <Button onClick={handleAsync}>边吃边喝</Button>

      <div>
        吃{eat}喝{drink}
      </div>
    </div>
  );
};

const HookDemo = () => {
  return (
    <div>
      <Tabs tabPosition="left">
        <Tabs.TabPane key="useState" tab="useState">
          <StateDemo />
        </Tabs.TabPane>
        <Tabs.TabPane key="reRender" tab="reRender">
          <div>reRender</div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default HookDemo;
