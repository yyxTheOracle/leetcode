/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * 解法一：JS Sort
 * 时间复杂度：O(nlogn)， JS sort 方法基于快速排序实现
 * 空间复杂度：O(1)，常数级变量，无额外空间
 * 
 * 注意不能用...来深拷贝，否则无法识别 nums1 的新地址
 */
var merge1 = function(A, m, B, n) {

};

/**
 * 解法二：双指针
 * 时间复杂度：O(m + n)，最坏情况遍历整个数组 A 和 数组 B
 * 空间复杂度：O(1)，常数级变量，无额外空间
 */
var merge2 = function(A, m, B, n) {
   
  console.log(A);
};

merge1([1,2,3,0,0,0], 3, [2,5,6], 3); // [1, 2, 2, 3, 5, 6]
merge1([2,0], 1, [1], 1); // [1]
merge1([0], 0, [1], 1); // [1]