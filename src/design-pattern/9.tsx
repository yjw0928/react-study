// 可观察对象 observerble
// 观察者     observer

// 一个主体可以添加多个观察者;
// 主体和观察者分离，不主动触发，被动监听，解耦

class Subject {
  state: number;
  observers: Array<Observer>;
  constructor() {
    this.state = 0;
    this.observers = [];
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((o) => o.name !== observer.name);
  }

  notifyObserver(context: any) {
    this.observers.forEach((observer) => {
      observer.update(context);
    });
  }
}

// 观察者
class Observer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(context: any) {
    console.log(this.name + context);
  }
}

const xiaohong = new Observer("小红");

const xiaogang = new Observer("小刚");

const observerble = new Subject();

observerble.subscribe(xiaohong);
observerble.subscribe(xiaogang);

observerble.notifyObserver("动画片开播了");
