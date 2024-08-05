class A {
  func1(arg1: string, arg2: string) {}

  func2(arg1: string, arg2: number) {}
}

// 定义A上面所有方法类型
type MethodsOfA = {
  [T in keyof A as A[T] extends (...args: any) => any ? T : never]: A[T];
};

// 定义方法的参数类型和返回值类型
type MethodSignaturesOfA = {
  [K in keyof MethodsOfA]: (
    ...args: Parameters<MethodsOfA[K]>
  ) => ReturnType<MethodsOfA[K]>;
};

class Context {
  aIns: A;
  constructor(aIns: A) {
    this.aIns = aIns;
  }

  exec<T extends keyof MethodSignaturesOfA>(
    name: T,
    ...args: Parameters<MethodSignaturesOfA[T]>
  ) {
    (this.aIns[name] as MethodSignaturesOfA[T])(...args);
  }
}
const aIns = new A();
const ins = new Context(aIns);
ins.exec("func1", "1", "1");
ins.exec("func2", "1", 2);
