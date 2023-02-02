// 适配器模式
class Adaptee {
  speciRequest() {
    return "特殊的";
  }
}

class Target {
  adaptee: Adaptee;
  constructor() {
    this.adaptee = new Adaptee();
  }

  request() {
    let info = this.adaptee.speciRequest();
    return info;
  }
}
const target = new Target();
console.log(target.request());
