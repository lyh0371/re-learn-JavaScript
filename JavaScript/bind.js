// bind也比较简单，返回一个函数，用户自己执行即可
/**--------------------最终完整版--------------------- */

const windowage = 19;
const info = {
  age: 100,
};
function Dome(age) {
  this.age = age || windowage;
  return this.age;
}
Function.prototype.myBind = function () {
  let [ctx, ...args] = [...arguments];
  try {
    ctx = Object(ctx) || window;
  } catch (error) {
    ctx = global;
  }
  const ID = Symbol();
  ctx[ID] = this;
  //   delete ctx[ID];
  return function () {
    return ctx[ID](...args);
  };
};

const a = Dome.myBind(info, 1);
console.log(a());
