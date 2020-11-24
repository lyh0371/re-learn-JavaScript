let arr = Array.from(
  { length: 10 },
  (v, k) => Math.floor(Math.random() * k) + Math.floor(Math.random() * 10 + 1)
);

/**
 * 冒泡排序
 * 原理: 变量数组 每次两两比较把最大的那个数据放在最后面
 * 时间复杂度 O(n^2)
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
 * 冒泡排序优惠
 * 原理: 变量数组 每次两两比较把最大的那个数据放在最后面
 * 时间复杂度 O(n^2)
 * 可达到最好时间复杂度为O(n) 判断了数组有序的情况
 */

function maopao2() {
  for (let i = 0; i < arr.length; i++) {
    let flag = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        flag = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }

    if (!flag) return arr;
  }
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
 * 实现思路: 把列表分为有序列表和无需列表, 在无需列表中拿一个值,判断在有序列表的具体位置,然后插入进去
 *
 */
function charu3() {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[i]) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = arr[i];
  }
  return arr;
}

/**
 * 选择排序
 * 原理:遍历数组每一次都把最小的放在最前面,直到遍历结束
 * 时间复杂度:O(n^2)
 */

function xunzhe() {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let minIndex = i;
    for (; j < arr.length; j++) {
      // 得到最小值
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (arr[minIndex] < arr[i]) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

/**
 * 归并排序
 * 思路: 分解子问题：将需要被排序的数组从中间分割为两半，然后再将分割出来的每个子数组各分割为两半，重复以上操作，直到单个子数组只有一个元素为止。
求解每个子问题：从粒度最小的子数组开始，两两合并、确保每次合并出来的数组都是有序的。（这里的“子问题”指的就是对每个子数组进行排序）。
合并子问题的解，得出大问题的解：当数组被合并至原有的规模时，就得到了一个完全排序的数组
 * 时间复杂度 : O(nlog(n))
 */

function guibing(arr) {
  const len = arr.length;
  // 处理边界情况
  if (len <= 1) {
    return arr;
  }
  // 计算分割点
  const mid = Math.floor(len / 2);
  // 递归分割左子数组，然后合并为有序数组
  const leftArr = guibing(arr.slice(0, mid));
  // 递归分割右子数组，然后合并为有序数组
  const rightArr = guibing(arr.slice(mid, len));
  // 合并左右两个有序数组
  arr = mergeArr(leftArr, rightArr);
  // 返回合并后的结果
  return arr;
}

console.log(useTime(guibing, arr, "归并"));
// useTime(xuanzhe, arr, "选择排序");
// console.log(useTime(charu, arr, "插入排序2"));
// useTime(maopao, arr, "冒泡排序");

function useTime(fn, arr, type) {
  console.log("原始值", arr);
  const statTime = new Date().getTime();
  const res = fn(arr);
  const endTime = new Date().getTime();
  console.log(`${type}所用时间:${endTime - statTime}ms`);
  return res;
}

function mergeArr(arr1, arr2) {
  // 初始化两个指针，分别指向 arr1 和 arr2
  let i = 0,
    j = 0;
  // 初始化结果数组
  const res = [];
  // 缓存arr1的长度
  const len1 = arr1.length;
  // 缓存arr2的长度
  const len2 = arr2.length;
  // 合并两个子数组
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
  if (i < len1) {
    return res.concat(arr1.slice(i));
  } else {
    return res.concat(arr2.slice(j));
  }
}
// https://github.com/qianduanzhou/music.git
