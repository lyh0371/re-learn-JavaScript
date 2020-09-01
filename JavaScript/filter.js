const arr = [1, 2, 3];

Array.prototype.myFilter = function (callback, ctx) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    const res = callback.call(ctx, this[i], i, this);
    if (res) temp.push(this[i]);
  }

  return temp;
};
const arr2 = arr.myFilter((item) => {
  return item > 2;
});

console.log(arr2);
