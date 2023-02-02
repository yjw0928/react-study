import React from "react";
//再学一次
// 类的构建 2020/12/13

// const p = new Person('yang', 28);
// p.eat();
// p.speak();

// 继承
class Student extends Person {
  constructor(name, age, number) {
    super(name, age); // 传递到父类的构造函数去执行
    this.number = number;
  }

  study() {
    alert(`${this.name} study daydayup ${this.number}`);
  }
}

class Star extends Person {
  constructor(name, age, like) {
    super(name, age);
    this.like = like;
  }

  play() {
    alert(`${this.name} 喜欢 ${this.like}`);
  }
}

const p1 = new Student("yang", 28, "a1");
p1.study();
p1.speak();

const p2 = new Star("wu", 18, "wangzhe");

p2.play();

const Demo: React.FC = () => {
  return <div></div>;
};
