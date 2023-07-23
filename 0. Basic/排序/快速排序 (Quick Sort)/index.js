/**
 * https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
 * 
 * 快排有一个很形象的概念：挖坑填数 + 分治法，分三个步骤实现：
 * - 从数组中取出一个数作为基准(pivot)。
 * - 在原数组中进行移动，将大于基准的数放到基准右边，小于基准的数放到基准左边，在基准左右形成两个子数组。
 * - 在左右子数组中反复执行步骤1、2，直到所有子数组只剩下一个数。
 */
var quickSort = function(arr = []) {
  if (arr.length <= 1) return arr; // 递归结束条件

  const pivotIdx = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIdx, 1)[0]; // 基准数
  
  let left = []; // 存放比 pivot 小的数字
  let right = []; // 存放比 pivot 大的数字
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
};

const arr = [5, 8, 2, 4, 6, 9, 7];
console.log(quickSort(arr));