import { Image } from "antd";
import React from "react";
import { CodeContain } from "wmui";

class Parent {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Son extends Parent {}
const a = new Parent("父级");
console.log(a);
console.log(new Son("我是谁"));

const Demo: React.FC = () => {
  return (
    <div>
      <h3>原型和原型链</h3>
      <CodeContain>
        {`
          __proto__: 隐式原型，指针指向对像的原型对象 
          prototype:显示原型对象,函数独有
          custructor: 指向当前对象的构造函数，谁创造了自己 
          `}
      </CodeContain>
      <Image src={require("./img/4-1.png")} />
    </div>
  );
};

export default Demo;
