/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 解法一：双层循环（自己做出来的）
 * 时间复杂度：O(n^2)，双层循环
 * 空间复杂度：O(1)
 */
// let twoSum = function(nums, target) {

// };

/**
 * 解法二：哈希
 * 时间复杂度：O(n)，最多遍历数组一遍，每次查询哈希表都是O(1)
 * 空间复杂度：O(n)，最坏情况下找到数组结尾才找到，其他都加入哈希表，哈希表最长 n - 1
 */
let twoSum = function(nums = [], target) {

};

console.log(twoSum([2,7,11,15], 9)); // [0, 1] or [1, 0]
console.log(twoSum([3,2,4], 6)); // [1, 2] or [2, 1]
console.log(twoSum([3,3], 6)); // [0, 1] or [1, 0]