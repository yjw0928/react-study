import React from "react";
import { CodeContain } from "yangjiwenui";

// 工厂模式
class Product {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Creator {
  constructor() {}
  public createProduct() {
    return new Product("食物");
  }
}
const product = new Creator().createProduct();

//单例模式
class SingleMode {
  static singleIns: SingleMode;
  private constructor() {}
  static getInstance(): SingleMode {
    if (!SingleMode.singleIns) {
      SingleMode.singleIns = new SingleMode();
    }
    return SingleMode.singleIns;
  }
}

const a = SingleMode.getInstance();

const Demo = () => {
  return (
    <div>
      <h2>创建型设计模式</h2>
      <h3>工厂模式</h3>
      <CodeContain>
        {`
          class Product {
            name: string;
            constructor(name: string) {
              this.name = name;
            }
          }
          class Creator {
            constructor() {}
            public createProduct() {
              return new Product("食物");
            }
          }
          const product = new Creator().createProduct();
        `}
      </CodeContain>
      <h3>单例模式</h3>
      <CodeContain>
        {`
          class SingleMode {
            static singleIns: SingleMode;
            private constructor() {
              return SingleMode.getInstance();
            }
            static getInstance(): SingleMode {
              if (!SingleMode.singleIns) {
                SingleMode.singleIns = new SingleMode();
              }
              return SingleMode.singleIns;
            }
          }
          
          const a = SingleMode.getInstance();
        `}
      </CodeContain>
    </div>
  );
};

export default Demo;
