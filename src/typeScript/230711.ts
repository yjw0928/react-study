// 接口继承类

class A {
  a: number;
  private c: string;
  static d: number;
  private static f: number;
  protected g: number;
  constructor() {
    this.a = 1;
  }
}

class BCls extends A {
  constructor() {
    super();
    this.g = 1;
  }
}

console.log(BCls.d);

// 接口继承类
interface B extends A {
  e: boolean;
}

const bDict: B = {
  a: 1,
  e: true,
  g: 1,
  c: "ddd",
};
