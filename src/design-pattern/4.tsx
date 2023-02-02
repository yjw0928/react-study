// 创建型

// 工厂模式
class Product {
  name: string;
  constructor(name) {
    this.name = name;
  }

  init() {}
  fn1() {}
}

// 这是一个工厂 替代new 操作    // 根据Type 生成不同类型的字段
class Creator {
  constructor(name) {
    return new Product(name);
  }
}
