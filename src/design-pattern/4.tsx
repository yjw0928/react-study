// 策略模式

import { CodeContain } from "yjwui0928";
import React from "react";

function introduce(name: string) {
  if (name === "xiaohong") {
    console.log("我是小红，我喜欢。。。。");
    return;
  }
  if (name === "xiaogang") {
    console.log("我是小刚，喜欢。。。。");
  }
}

// 基本策略模式

const student: Record<string, string> = {
  xiaohong: "我是小红。。。。。",
  xiaogang: "我是小刚。。。。。",
  xiaoming: "我是小明。。。。。",
};

function introduce1(name: string) {
  console.log(student[name]);
}

class Context {
  strategy: Strateg;

  setStrategy(strategy: Strateg) {
    this.strategy = strategy;
  }
  execStrategy() {
    this.strategy.do();
  }
}

interface Strateg {
  do: () => void;
}

class StrategA implements Strateg {
  do() {
    console.log("我要去画画");
  }
}

class StrategB implements Strateg {
  do() {
    console.log("我要去跳舞");
  }
}

const context = new Context();

const strateA = new StrategA();
context.setStrategy(strateA);
context.execStrategy();

const strateB = new StrategB();
context.setStrategy(strateB);
context.execStrategy();

const Demo = () => {
  return (
    <div>
      <h2>行为型设计模式</h2>
      <h3>策略模式</h3>
      <CodeContain>
        {`
            function introduce(name: string) {
                if (name === "xiaohong") {
                  console.log("我是小红，我喜欢。。。。");
                  return;
                }
                if (name === "xiaogang") {
                  console.log("我是小刚，喜欢。。。。");
                }
              }
              
              // 基本策略模式
              
              const student: Record<string, string> = {
                xiaohong: "我是小红。。。。。",
                xiaogang: "我是小刚。。。。。",
                xiaoming: "我是小明。。。。。",
              };
              
              function introduce1(name: string) {
                console.log(student[name]);
              }
              
              class Context {
                strategy: Strateg;
              
                setStrategy(strategy: Strateg) {
                  this.strategy = strategy;
                }
                execStrategy() {
                  this.strategy.do();
                }
              }
              
              interface Strateg {
                do: () => void;
              }
              
              class StrategA implements Strateg {
                do() {
                  console.log("我要去画画");
                }
              }
              
              class StrategB implements Strateg {
                do() {
                  console.log("我要去跳舞");
                }
              }
              
              const context = new Context();
              
              const strateA = new StrategA();
              context.setStrategy(strateA);
              context.execStrategy();
              
              const strateB = new StrategB();
              context.setStrategy(strateB);
              context.execStrategy();
            `}
      </CodeContain>
    </div>
  );
};

export default Demo;
