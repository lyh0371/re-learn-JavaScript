let arr = Array.from(
  { length: 20000 },
  (v, k) => Math.floor(Math.random() * k) + Math.floor(Math.random() * 10 + 1)
);

/**
 * 冒泡排序
 */

function maopao(arr) {
  for (let j = 0; j < arr.length - 2; j++) {
    for (let i = 0; i < arr.length - j - 1; i++) {
      let n = null;
      if (arr[i] > arr[i + 1]) {
        n = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = n;
      }
    }
  }
  return arr;
}

/**
 *
 * 插入排序
 */
function charu() {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;
    for (; j >= 0; --j) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }

  return arr;
}
useTime(charu, arr, "插入排序");
useTime(maopao, arr, "冒泡排序");

function useTime(fn, arr, type) {
  const statTime = new Date().getTime();
  const res = fn(arr);
  const endTime = new Date().getTime();
  console.log(`${type}所用时间:${endTime - statTime}ms`);
  return res;
}
