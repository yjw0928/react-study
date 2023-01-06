import React from "react";

const Demo = () => {
  console.log(1);

  const asyncFunc = () => {
    return new Promise((resolve, reject) => {
      console.log(2);
      resolve(true);
    });
  };

  const asyncFunc2 = () => {
    return new Promise((resolve, reject) => {
      console.log(3);
      setTimeout(() => {
        console.log(7);
        asyncFunc().then(() => {
          console.log(8);
        });
      }, 0);
    });
  };
  asyncFunc2();

  asyncFunc()
    .then(() => {
      console.log(5);
      setTimeout(() => {
        console.log(10);
      }, 0);
    })
    .then(() => {
      console.log(6);
    });

  setTimeout(() => {
    console.log(9);
  }, 0);

  console.log(4);

  return (
    <div>
      <h2>事件循环</h2>
      <p>
        调用栈（call stake），回调队列（宏任务）callback queue,
        工作队列（微任务） job queue
      </p>
      <br />
      <h3>任务执行流程</h3>
      当调用栈为空时，会继续检查当前的微任务列表里面是否有任务，有的话直接push到调用栈，当微任务清空
      之后才会将宏任务放入到调用栈
    </div>
  );
};

export default Demo;
