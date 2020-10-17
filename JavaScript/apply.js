// 实现call后，apply就简单了 他两主要的区别就是第二个参数的形式不同，apply接受的一个数组
/**--------------------最终完整版--------------------- */

const windowage = 19;
const info = {
  age: 100,
};
function Dome(age) {
  console.log(this);
  this.age = age || windowage;
  return this.age;
}
Function.prototype.myApply = function () {
  let [ctx, args] = [...arguments];
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

const a = Dome.myApply(info, [1]);
console.log(a);
