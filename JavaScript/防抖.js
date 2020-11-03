function debounce(fn, delay) {
  let timer = null; //借助闭包
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay); // 简化写法
  };
}

function demo() {
  console.log("nihao ");
}

setInterval(() => {
  debounce(demo, 5000)();
}, 1000);
