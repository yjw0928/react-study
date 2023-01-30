// 链式调用 执行

class A {
  num = 0;

  parse(str: string) {
    const func = new Function(str);
    func.call(this);
  }

  T(a: number) {
    this.num = this.num + a;
    return this;
  }

  reduce(b: number) {
    this.num = this.num - b;
    return this;
  }
}

const ins = new A();

ins.parse("((this.T(0)).reduce(6))");
