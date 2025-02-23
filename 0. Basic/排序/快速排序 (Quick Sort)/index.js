/**
 * https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
 *
 * 快排有一个很形象的概念：挖坑填数 + 分治法，分三个步骤实现：
 * - 从数组中取出一个数作为基准 (pivot)。
 * - 在原数组中进行移动，将大于基准的数放到基准右边，小于基准的数放到基准左边，在基准左右形成两个子数组。
 * - 在左右子数组中反复执行步骤 1 & 2，直到所有子数组只剩下一个数。
 */
var quickSort = function (arr = []) {
  // 递归的终止条件 (base condition)
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIdx = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIdx, 1)[0];

  let left = []; // 存放比 pivot 小的数字
  let right = []; // 存放比 pivot 大的数字

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

/**
 * 原地排序版本
 *
 * @param {Array} arr - 待排序的数组
 * @param {number} left - 数组的左边界索引，默认为 0
 * @param {number} right - 数组的右边界索引，默认为数组长度减 1
 * @returns {Array} - 排序后的数组
 */
var quickSortInPlace = function (arr = [], left = 0, right = arr.length - 1) {
  // 如果左边界小于右边界，说明子数组中至少有两个元素，需要继续排序
  if (left < right) {
    // 调用 partition 函数获取基准元素的最终位置
    const pivotIdx = partition(arr, left, right);
    // 对基准元素左边的子数组进行递归排序
    quickSortInPlace(arr, left, pivotIdx - 1);
    // 对基准元素右边的子数组进行递归排序
    quickSortInPlace(arr, pivotIdx + 1, right);
  }

  // 返回排序后的数组
  return arr;
};

/**
 * 分区函数，用于将数组分为两部分，左边部分小于基准元素，右边部分大于基准元素
 *
 * @param {Array} arr - 待分区的数组
 * @param {number} left - 分区的左边界索引
 * @param {number} right - 分区的右边界索引
 * @returns {number} - 基准元素的最终位置
 */
function partition(arr, left, right) {
  // 选择最右边的元素作为基准元素
  const pivotValue = arr[right];
  // 初始化基准元素的最终位置
  let pivotIdx = left;

  // 遍历从左边界到右边界（不包含右边界）的所有元素
  for (let i = left; i < right; i++) {
    // 如果当前元素小于基准元素
    if (arr[i] < pivotValue) {
      // 将当前元素与基准元素最终位置的元素交换
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
      // 基准元素的最终位置右移一位
      pivotIdx++;
    }
  }

  // 将基准元素放到最终位置
  [arr[pivotIdx], arr[right]] = [arr[right], arr[pivotIdx]];

  // 返回基准元素的最终位置
  return pivotIdx;
}

const arr = [5, 8, 2, 4, 6, 9, 7];
console.log(quickSort(arr));
console.log(quickSortInPlace(arr));
