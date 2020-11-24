/**
 * 合并两个数组并排序 算法层面
 * 思路: 双指针实现
 */

function margArr(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  //  声明两个指针

  let i = 0,
    j = 0,
    marg = [];

  while (i != len1 || j != len2) {
    if (arr1[i] < arr2[j]) {
      marg.push(arr1[i]);
      i++;
    } else if (arr1[i] >= arr2[j]) {
      marg.push(arr2[j]);
      j++;
    } else if (arr1[i] === undefined) {
      // 说明 第一个数组已经没有值了
      marg = [...marg, ...arr2.slice(j)];
      break;
    } else if (arr2[j] === undefined) {
      marg = [...marg, ...arr1.slice(i)];
      break;
    }
  }

  return marg;
}

/**

[1,2,3]


[4,5,6,7]


 */
