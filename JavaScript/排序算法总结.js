let arr = Array.from(
  { length: 50000 },
  (v, k) => Math.floor(Math.random() * k) + Math.floor(Math.random() * 10 + 1)
);

/**
 * 冒泡排序
 * 原理: 变量数组 每次两两比较把最大的那个数据放在最后面
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
 * 插入排序  找到元素在它前面那个序列中的正确位置
 * 原理: 把要排序的数组分为已经排序和未排序, 每次在未排序里面取一个值,按着已经排序的数组的顺序放进来, 直到未排序数组为空
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

function charu2() {
  // 缓存数组长度
  const len = arr.length;
  // temp 用来保存当前需要插入的元素
  let temp;
  // i用于标识每次被插入的元素的索引
  for (let i = 1; i < len; i++) {
    // j用于帮助 temp 寻找自己应该有的定位
    let j = i;
    temp = arr[i];
    // 判断 j 前面一个元素是否比 temp 大
    while (j > 0 && arr[j - 1] > temp) {
      // 如果是，则将 j 前面的一个元素后移一位，为 temp 让出位置
      arr[j] = arr[j - 1];
      j--;
    }
    // 循环让位，最后得到的 j 就是 temp 的正确索引
    arr[j] = temp;
  }
  return arr;
}

/**
 * 选择排序
 * 原理:遍历数组每一次都把最小的放在最前面,直到遍历结束
 */

function xuanzhe() {
  // 缓存数组长度
  const len = arr.length;
  // 定义 minIndex，缓存当前区间最小值的索引，注意是索引
  let minIndex;
  // i 是当前排序区间的起点
  for (let i = 0; i < len - 1; i++) {
    // 初始化 minIndex 为当前区间第一个元素
    minIndex = i;
    // i、j分别定义当前区间的上下界，i是左边界，j是右边界
    for (let j = i; j < len; j++) {
      // 若 j 处的数据项比当前最小值还要小，则更新最小值索引为 j
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 如果 minIndex 对应元素不是目前的头部元素，则交换两者
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// console.log(useTime(xuanzhe, arr, "选择排序"));
// useTime(xuanzhe, arr, "选择排序");
// console.log(useTime(charu, arr, "插入排序2"));
// useTime(maopao, arr, "冒泡排序");

function useTime(fn, arr, type) {
  const statTime = new Date().getTime();
  const res = fn(arr);
  const endTime = new Date().getTime();
  console.log(`${type}所用时间:${endTime - statTime}ms`);
  return res;
}

// https://github.com/qianduanzhou/music.git
