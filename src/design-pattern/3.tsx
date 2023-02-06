// // 面试题示例

// //1.打车

// // class Car {
// //     number: String;
// //     name: String;
// //     price: number
// //     constructor(number ,name) {
// //         this.number = number;
// //         this.name = name;
// //     }
// // }

// // class KuaiCar extends Car {
// //     constructor(number, name) {
// //         super(number, name)
// //         this.price = 20;
// //     }
// // }

// // class ManCar extends Car {
// //     constructor(number,name) {
// //         super(number, name)
// //         this.price = 10
// //     }
// // }

// // class Trip {
// //     car: Car
// //     constructor(car){
// //         this.car = car
// //     }

// //     start() {
// //         console.log(this.car.number, this.car.name)
// //     }

// //     end() {
// //         console.log(this.car.price * 5)
// //     }
// // }

// // const car = new KuaiCar('A0000', 'BWM')
// // const trip = new Trip(car);

// // trip.start();
// // trip.end();

// // 2.停车场

// class Car {
//   number: String;
//   name: String;
//   constructor(number, name) {
//     this.number = number;
//     this.name = name;
//   }
// }

// // 摄像头

// class Camrea {
//   constructor() {}
//   shot(car: Car) {
//     return {
//       num: car.number,
//       inTime: Date.now(),
//     };
//   }
// }

// // 显示屏
// class Scree {
//   show(car: Car, inTime) {
//     console.log(car.number, Date.now() - inTime);
//   }
// }

// class Park {
//   floos: Array<Floor>;
//   camrea: Camrea;
//   scree: Scree;
//   carList: any;
//   constructor(floos) {
//     this.floos = floos || [];
//   }

//   in(car) {
//     // 车辆信息
//     const info = this.camrea.shot(car);
//     // 停到某个车位
//     const i = parseInt((Math.random() * 100) % 100);
//     const place = this.floos[0].places[i];
//     place.in();
//     info.place = place;
//     this.carList[car.number] = info;
//   }

//   out(car: Car) {
//     // 获取信息
//     const info = this.carList[car.number];

//     // 将停车位清空
//     const place = info.place;
//     place.out();

//     // 显示时间
//     this.scree.show(car, info.inTime);

//     //清楚记录
//     delete this.carList[car.number];
//   }

//   emptyNum() {
//     this.floos.map((floor) => {
//       console.log(`${floor.index}层有${floor.emptyPlaceNumber}个车位`);
//     });
//   }
// }

// // 层

// class Floor {
//   index: number;
//   places: Array<Place>;
//   constructor(index, places) {
//     this.index = index;
//     this.places = places;
//   }

//   emptyPlaceNumber() {
//     let num = 0;
//     this.places.forEach((place) => {
//       if (place.isEmpty) {
//         num += 1;
//       }
//     });
//     return num;
//   }
// }

// // 车位

// class Place {
//   isEmpty: boolean;
//   constructor() {
//     this.isEmpty = true;
//   }

//   in() {
//     this.isEmpty = false;
//   }

//   out() {
//     this.isEmpty = true;
//   }
// }

import React from "react";

const Demo = () => {
  return <div>666</div>;
};
