// js 实现防抖

function shakeproof(fn, time) {
  let flag = true;
  let timer;
  return function (...arg) {
    if (!flag) return false;
    flag = false;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...arg);
      flag = true;
    }, time);
  };
}

// 使用

function test(arg) {
  console.log(arg);
}

const Test = shakeproof(test, 2000);

// 模拟点击事件

setInterval(() => {
  console.log("我执行了");
  Test("hah");
}, 500);
