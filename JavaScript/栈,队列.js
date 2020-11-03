/*
class Z {
  constructor() {
    this.arr = [];
  }
  // 出栈
  pop() {
    return this.arr.pop();
  }
  // 入栈
  push(item) {
    this.arr.push(item);
  }
  // 获取长度
  len() {
    return this.arr.length;
  }
  // 清空栈
  isEmpty() {
    this.arr.length = 0;
  }
}
// 使用
const z = new Z();
const arr = [1, 2, 3, 4, 5];
const item = 0;
// 一个个入栈
arr.forEach((item) => {
  z.push(item);
});
// 在一个个出栈
let arr2 = [];
while (z.len() > 0) {
  arr2.push(z.pop());
}
console.log(arr2); // [ 5, 4, 3, 2, 1 ]

*/

class D {
  constructor() {
    this.arr = [];
  }
  // 出栈
  pop() {
    return this.arr.shift();
  }
  // 入栈
  push(item) {
    this.arr.push(item);
  }
  // 获取长度
  len() {
    return this.arr.length;
  }
  // 清空栈
  isEmpty() {
    this.arr.length = 0;
  }
}
// 基于队列实现发布订阅模式
const d = new D();
class T {
  constructor() {}

  // 订阅者 订阅事件
  on(fn) {
    // 把事件入队列
    d.push(fn);
  }
  // 发布者 发布事件

  emit() {
    console.log("d.len", d.len());
    // 按照顺序执行队列
    while (d.len() > 0) {
      const fn = d.pop();
      fn(); // 执行
    }
  }
}

const t = new T();

t.on(() => {
  console.log(1);
});
t.on(() => {
  console.log(2);
});
t.on(() => {
  console.log(3);
});

t.emit();
// 1
// 2
// 3
