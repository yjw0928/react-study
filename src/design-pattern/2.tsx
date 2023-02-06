// // 面向对象3要素 继承 封装 多肽
// // 封装
// // 封装
// // public 公开的  private 私有的   protected 只有自己和子类里面访问，不能从外部访问
// // 减少耦合， 不该外露的不外露
// // 利于数据，接口权限管理
// // Es6目前不支持， _ 下划线开头的默认是私有属性

// // 设计原则

// // 准则1：小即是美
// // 准则2：让每个程序只做好一件事
// // 准则3：快速建立原型
// // 准则4：舍弃高效率而取可移植性
// // 准则5：采用纯文本来存储数据
// // 准则6：复用性
// // 准则7：使用sheel脚本来提高杠杆效应和可移植性
// // 准则8：避免强制性的用户界面
// // 准则9：让每个程序都称为过滤器

// // 小准则：允许用户定制环境，尽量使操作系统内核小而轻量化，使用小写字母并尽量简写，沉默是金，各部分之和大于整体，寻求90%的解决方案

// // 五大设计原则
// // S -单一职责原则
// // O -开放封闭原则
// // L -李氏置换原则
// // I -接口独立原则
// // D - 依赖倒置原则

// // S 一个程序只做一件事 ，过于复杂拆分，保持独立
// // O  对扩展开放，对修改封闭
// // L 子类能覆盖父类， 父类能出现的地方子类都能出现
// // I 保持接口独立原则 ，避免出现胖接口
// // D 面向接口编程，依赖于抽象而不依赖于具体实现

// // 从设计到模式
// // 设计  模式   分开   从设计到模式

// // 23种设计模式

// // 创建型
// // 1 工厂模式  2单例模式   3原型模式

// // 组合型 结构型

// // 适配器模式   装饰器模式  代理模式    外观模式    桥接模式  组合模式  享元模式

// //行为型
// // 策略模式  模板方法模式  观察者模式* 迭代器模式* 职责链模式 命令模式  备忘录模式  状态模式* 访问者模式 中介模式 解释器模式

// class Car {
//   name;
//   age; // 默认是公开的
//   protected weight; // 本身和子类才能访问 外部访问不到
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.weight = 20;
//   }

//   eat() {
//     alert(`${this.name} eat food`);
//   }

//   speak() {
//     alert(`My name is ${this.name} and ${this.age}`);
//   }
// }

// //继承
// class Car1 extends Car {
//   private color;
//   constructor(name, age) {
//     super(name, age);
//     this.color = "black"; // 只能自身里面访问
//   }
//   run() {
//     alert(`一只 ${this.weight} 斤 ${this.color} car run `); // weight本身和子类里面才能访问得到
//   }
// }

// // 多态
// // 同一个方法，继承父类，减少代码冗余，在子类里面可以有不同的实现,保持子类的开放性和灵活性
// // renderValue
// class BaseField {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   renderValue(value: string) {
//     return value;
//   }
// }

// class MoneyField extends BaseField {
//   constructor(name) {
//     super(name);
//   }
//   renderValue(value) {
//     return Number(value);
//   }
// }

// class TextField extends BaseField {
//   constructor(name) {
//     super(name);
//   }
//   renderValue(value) {
//     return value;
//   }
// }

import React from "react";

const Demo = () => {
  return <div>666</div>;
};
