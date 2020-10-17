// 链式调用版本
class myPromise {
  constructor(fn) {
    this.status = "pending"; // 定义初始值状态
    this.value = undefined; // 定义状态为 resolved 的值
    this.season = undefined; // 定义 状态为 reject的值

    this.onFullfilledArray = [];
    this.onRejectedArray = [];

    // 执行fn
    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  // 成功
  resolve(value) {
    if (this.status === "pending") {
      this.value = value;
      this.status = "resolved";

      this.onFullfilledArray.forEach((f) => {
        f.bind(this)(this.value);
      });
    }
  }
  // 失败
  reject(reason) {
    if (this.status === "pending") {
      this.reason = reason;
      this.status = "rejected";
      this.onRejectedArray.forEach((f) => {
        f.bind(this)(this.reason);
      });
    }
  }
  then(success, file) {
    let promise2;
    if (this.status === "pending") {
      promise2 = new myPromise((resolve, reject) => {
        this.onFullfilledArray.push(() => {
          try {
            let temple = success(this.value);
            resolve(temple);
          } catch (error) {
            reject(error);
          }
        });
        this.onRejectedArray.push(() => {
          try {
            let temple = file(this.reason);
            resolve(temple);
          } catch (error) {
            reject(error);
          }
        });
      });
    } else if (this.status === "resolved") {
      promise2 = new myPromise((resolve, reject) => {
        try {
          let temple = success(this.value);
          resolve(temple);
        } catch (error) {
          reject(error);
        }
      });
    } else if (this.status === "rejected") {
      promise2 = new myPromise((resolve, reject) => {
        try {
          let temple = file(this.reason);
          resolve(temple);
        } catch (error) {
          reject(error);
        }
      });
    }

    // console.log("promise2", promise2);
    return promise2;
  }
}

var p = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 100);
});

p.then(function (x) {
  console.log(x);
})
  .then(function () {
    console.log("链式调用1");
  })
  .then(function () {
    console.log("链式调用2");
  });
