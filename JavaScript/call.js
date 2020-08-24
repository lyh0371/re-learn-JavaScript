// 将函数设置为对象的属性  这个是重点 ：如

function mydome() {
  this.name = "码不停息";
}
mydome.prototype.pay = function () {
  console.log(this.name); //  码不停息
};

// 执行这个函数
// 删除这个函数

const age = 18;

function Dome() {
  console.log(this.age);
}
const info = {
  age: 100,
};

Function.prototype.myCall = function (ctx) {
  ctx.attr = this;

  console.log(ctx);
};

Dome();
Dome.myCall(info);

Dome.call(info);
