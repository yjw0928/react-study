import React from "react";
import { CodeContain } from "wmui";

const getProxyHandler = (num: number): any => {
  return {
    get: (target: any, p: any): any => {
      if (Reflect.has(target, p)) {
        return target[p];
      }
      if (num > 5) {
        return 6;
      }
      return new Proxy({ a: 1 }, getProxyHandler(num + 1));
    },
    set: (target: any, p: any) => {
      target[p] = 6;
      return true;
    },
  };
};

class Obj {
  name: string;
  constructor() {
    return new Proxy(this, getProxyHandler(1));
  }
}

const obj1 = new Obj() as any;
console.log(obj1.c); //Proxy({a:1})
console.log(obj1.c.c); // Proxy({a:1})

console.log((obj1 as any).c.c.c.c.c.c); // 6;
obj1.d = 8;
console.log(obj1.d); // 6;

const Demo = () => {
  return (
    <div>
      <h3>代理</h3>
      <CodeContain>
        {`
        const getProxyHandler = (num: number): any => {
            return {
              get: (target: any, p: any): any => {
                if (Reflect.has(target, p)) {
                  return target[p];
                }
                if (num > 5) {
                  return 6;
                }
                return new Proxy({ a: 1 }, getProxyHandler(num + 1));
              },
              set: (target: any, p: any) => {
                target[p] = 6;
                return true;
              },
            };
          };
          
          class Obj {
            name: string;
            constructor() {
              return new Proxy(this, getProxyHandler(1));
            }
          }
          
          const obj1 = new Obj();
          console.log(obj1.c); //Proxy({a:1})
          console.log(obj1.c.c); // Proxy({a:1})
          
          console.log((obj1 as any).c.c.c.c.c.c); // 6;
          obj1.d = 8;
          console.log(obj1.d); // 6;
            `}
      </CodeContain>
    </div>
  );
};

export default Demo;
