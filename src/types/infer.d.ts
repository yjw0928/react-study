// infer 类型推断
type F<T> = T extends () => infer A ? A : never;

// C string 类型
type C = F<() => string>;
