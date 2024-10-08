type F<T> = T extends () => infer A ? A : never;

type C = F<() => string>;
