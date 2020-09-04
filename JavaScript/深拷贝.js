// 1 比较粗暴的方式， 使用JSON.parse(JSON.stringify)
// 缺点, 会丢失一些函数成员
// undefined、symbol 和函数这三种情况，会直接忽略 new Date 情况下，转换结果不正确 不能处理正则

const obj = {
  fn() {
    console.log("码不停息");
  },
  time: new Date(),
};

const obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2); // 你会神奇的发现，fn函数不见了

// 2. Object.assign
// 缺点，只能拷贝一级

const o = {
  pay: {
    love: "pingpang",
  },
};
const o2 = Object.assign(o);
o2.pay.love = "nopingpang";

console.log(o === o2); // true

// 递归
// https://juejin.im/post/6844904170332356616#heading-9
function deepClone1(obj) {
  var target = {};
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      target[key] = deepClone1(obj[key]);
    } else {
      target[key] = obj[key];
    }
  }
  return target;
}

let obj1 = { a: 1, b: { c: 2 } };
let obj2 = deepClone1(obj1);
console.log(obj2); // {a: 1, b: {c: 2}}

obj1.a = 3;
obj1.b.c = 4;

console.log(obj1); // {a: 3, b: {c: 4}}
console.log(obj2); // {a: 1, b: {c: 2}}
