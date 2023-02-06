import React from "react";
import { debounce, debounceTime, from, interval, of, Subject } from "rxjs";

const Demo: React.FC = () => {
  const sub1 = new Subject();
  sub1.next(1);
  sub1.subscribe((a) => console.log(a));
  console.log(2);
  sub1.subscribe((a) => console.log(a));

  of(1, 2, 3).subscribe((a) => console.log(a));

  //   from of 发出值是同步的
  console.log("start");
  const subscription = from([1, 2, 3])
    //   .pipe(() => interval(1000))  interval属于异步的
    .subscribe((a) => {
      console.log(a);
    });
  subscription.unsubscribe();
  console.log("end");

  //   Subject 可以作为可观察对象也可以作为一个观察者

  const subA = new Subject<number>();

  subA.subscribe((v: number) => console.log(v));

  of(1, 2, 3).subscribe(subA);

  return (
    <div>
      * observable 可观察对象 * Observer 观察者 * Subscription
      订阅之后返回一个可观测执行，常用于取消订阅 * Operators 操作符
      ，常用于对数据流进行处理 * Subject
      相当于一个EventEmitter,多播一个值或事件的唯一方法到多个观察者。 *
      Schedulers 集中式调度程序来控制并发性,允许我们协调计算发生在如setTimeout
      requestAnimationFrame或其他人。
    </div>
  );
};

export default Demo;
