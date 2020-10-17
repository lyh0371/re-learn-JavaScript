// 基础版本

class myPromise {
  constructor(fn) {
    this.status = "pending"; // 定义初始值状态
    this.value = undefined; // 定义状态为 resolved 的值
    this.season = undefined; // 定义 状态为 reject的值

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
    }
  }
  // 失败
  reject(reason) {
    console.log("this", this);
    if (this.status === "pending") {
      this.reason = reason;
      this.status = "rejected";
    }
  }
  then(success, file) {
    if (this.status === "resolved") {
      success(this.value);
    } else if (this.status === "rejected") {
      file(this.reason);
    }
  }
}

var p = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 100);
});
p.then(function (x) {
  console.log(x);
});
