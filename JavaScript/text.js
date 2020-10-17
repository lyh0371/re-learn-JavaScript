function Pre() {
  console.log(1);
}

const pre = new Pre();
Pre.prototype.say = function () {};

pre.name = "lyh";

// console.log(pre.);
// console.log(Pre.prototype.isPrototypeOf(pre));
// console.log(Pre.prototype);

// console.log(pre.constructor === Pre);
