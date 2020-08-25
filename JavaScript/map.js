const arry = [1, 2, 3, 4];
// const arry2 = arry.map((item) => {
//   return item + 1;
// });

// 实现思路
// 首先 map会返回一个新的数组 说明我们也需要在内部维护一个数组
//  map 会接受一个函数fn 我们可以遍历执行fn并通过this拿到原有的数组，把参数回传给fn
// 注意fn执行的结果要push到新数组里面，新数组最后返回

Array.prototype.myMap = function (fn) {
  let temp = [];
  console.log(fn(1));
  for (let i = 0; i < this.length; i++) {
    // console.log();
    let result = fn(this[i]);

    temp.push(result);
  }
  return temp;
};

// 注意 mdn中 map是有两个参数，第二个参数可以指定当前作用域
// 所以我们的myMap最终版本为
Array.prototype.myMap = function (fn, ctx) {
  let temp = [];
  console.log(fn(1));
  for (let i = 0; i < this.length; i++) {
    // console.log();
    let result = fn.call(ctx, this[i]);

    temp.push(result);
  }
  return temp;
};
const arry2 = arry.myMap((item, index, arr) => {
  return item + 1;
});
console.log(arry2);
