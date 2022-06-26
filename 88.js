https://github.com/hovinghuang/fe-agorithm-interview/blob/main/src/00-codetop-fontend-100/02-merge-sorted-arr.ts
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * 解法一：JS Sort
 * 思路：
 * （1）先判断 B 为空直接 return，A 为空则将 B shift 到 A 中
 * （2）将 B shift 填到 A 尾部的扩容区域，然后用 sort 排序
 * 时间复杂度：O(nlogn)， JS sort 方法基于快速排序实现
 * 空间复杂度：O(1)，常数级变量，无额外空间
 * 
 * 注意不能用...来深拷贝，否则无法识别nums1的新地址
 */
var merge1 = function(A, m, B, n) {

    console.log(A);
};

/**
 * 解法二：双指针
 * 思路：
 * （1）先判断 B 为空直接 return，A 为空则将 B shift 到 A 中
 * （2）使用三个指针，aIndex 指向数组 A 的最大元素，bIndex 指向数组B的最大元素，mIndex 指向数组A空间的结尾处。
 * （3）从两个数组最大的元素开始遍历，直到某一个结束，每次取出较大的一个值放入数组 A 空间的最后，然后指针依次往前。
 * （4）如果数组 B 先遍历结束，数组 A 前半部分已经存在了，不用管;但是如果数组 A 先遍历结束，则需要把数组 B 剩余的前半部分依次逆序加入数组 A 前半部分
 * 时间复杂度：O(m + n)，最坏情况遍历整个数组 A 和 数组 B
 * 空间复杂度：O(1)，常数级变量，无额外空间
 */
var merge2 = function(A, m, B, n) {
   
    console.log(A);
};

merge2([1,2,3,0,0,0], 3, [2,5,6], 3)
merge2([2,0], 1, [1], 1)
merge2([0], 0, [1], 1)