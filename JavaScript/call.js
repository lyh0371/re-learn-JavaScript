/*
 * @Date: 2020-08-25 10:27:37
 */

/**
 *
 *
主要思路

1. 将函数设置为对象的属性  这个是重点, ：如

const obj = {};
function fn() {
  console.log(this);
}
fn();
fn.call(obj);  // 想要改变fn中this的指向，就必须把fn作为obj的属性，这个时候，当我们在fn中使用

function mydome() {
 this.name = "码不停息";
}
mydome.prototype.pay = function () {
 console.log(this.name); //  码不停息
};

2. 执行这个函数
3. 删除这个函数
*/

/**--------------------不用传参数,也没有返回值--------------------- */
// const age = 18;
// function Dome() {
//   console.log(this.age);
// }
// const info = {
//   age: 100,
// };

// Function.prototype.myCall = function (ctx) {
//   ctx.attr = this;
//   // 执行这个函数
//   ctx.attr();
//   // 删除这个函数
//   delete ctx.attr
// };
// // 注意 : 这个时候函数不用传参数,也没有返回值
// Dome.myCall(info); // 100

/**--------------------传参数--------------------- */
// const age = 18;
// const info = {
//   age: 100,
// };
// function Dome(age) {
//   this.age = age;
//   return this.age
// }
// Function.prototype.myCall = function () {
//   // ctx.attr = this;
//   let [ctx, ...args] = [...arguments]
//   ctx.attr = this;
//   ctx.attr(...args);
//   delete ctx.attr
// }
// const a = Dome.myCall(info, 18)
// console.log(a)
/**--------------------传参数带返回值--------------------- */

// const age = 18;
// const info = {
//   age: 100,
// };
// function Dome(age) {
//   this.age = age;
//   return this.age
// }
// Function.prototype.myCall = function () {
//   let [ctx, ...args] = [...arguments]
//   ctx.attr = this;
//   console.log(Object(ctx))
//   const res = ctx.attr(...args);
//   delete ctx.attr
//   return res
// }

// const a = Dome.myCall(info, 18)
// console.log(a)

// 现在基本上可以满足我们的需求,但还有两个问题
// 1. 没有对myCall传过来的参数做判断, 如果第一个参数没有,或者不是object时 我们把this指向window
// 2. 我们用了attr 这个自定义字段作为新增属性,这样不严谨,如果info对象里面要是有这个属性那就糟糕了
// 3. 没有对node环境做出判断

/**--------------------最终完整版--------------------- */

const windowage = 19;
const info = {
  age: 100,
};
function Dome(age) {
  this.age = this.age || windowage;
  return this.age;
}
Function.prototype.myCall = function () {
  let [ctx, ...args] = [...arguments];
  try {
    ctx = Object(ctx) || window;
  } catch (error) {
    ctx = global;
  }
  const ID = Symbol();
  ctx[ID] = this;
  const res = ctx[ID](...args);
  delete ctx[ID];
  return res;
};

const a = Dome.myCall(info);
console.log(a);

// const obj = {};

// function fn() {
//   console.log(this);
// }

// fn();

// fn.call(obj);
