// 接口继承类

export interface Test {
  a: number;
}

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
