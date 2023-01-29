import { Button, message } from "antd";
import React, { useCallback } from "react";

class A {
  constructor() {}
  async *[Symbol.asyncIterator]() {
    let num = 0;
    while (num < 6) {
      yield Promise.resolve(num);
      num++;
    }
  }
}

const Demo: React.FC = () => {
  const doPrint = useCallback(() => {
    const arr = [1, 2, 3];
    const iterator = arr[Symbol.iterator]();
    message.info(`next${iterator.next().value}`);
    for (const v of iterator) {
      message.info(v);
    }
  }, []);

  const doPrint2 = useCallback(() => {
    function* generatorFn() {
      yield 1;
      yield 2;
    }

    const iterator = generatorFn();
    for (const v of iterator) {
      message.info(v);
    }
  }, []);

  const asyncIterator = async () => {
    const f = new A();
    for await (const v of f) {
      message.info(v);
    }
  };

  return (
    <div>
      <h2>迭代器和生成器</h2>

      <h2>迭代器</h2>
      <Button onClick={doPrint}>打印一下</Button>

      <h2>生成器</h2>
      <Button onClick={doPrint2}>打印一下</Button>
      <Button onClick={asyncIterator}>异步生成器</Button>
    </div>
  );
};

export default Demo;
