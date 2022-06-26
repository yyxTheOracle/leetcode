/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 解法一：双层循环（自己做出来的）
 * 思路：详情看以下代码
 * 时间复杂度：O(n^2)，双层循环
 * 空间复杂度：O(1)
 * 注意：如果这里的 nums 是有序的话，优化嵌套循环，可以考虑 “双指针”
 */
var twoSum1 = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }            
        }
    }
};

/**
 * 解法二：哈希
 * 思路：遍历的同时借助哈希表，记录值和下标
 * 时间复杂度：O(n)，最多遍历数组一遍，每次查询哈希表都是O(1)
 * 空间复杂度：O(n)，最坏情况下找到数组结尾才找到，其他都加入哈希表，哈希表最长 n - 1
 */
var twoSum2 = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i]; // temp就是和当前元素相加等于target的数字
        if (map.has(temp)) {
            return [i, map.get(temp)]; // map里有这个数字的话就直接返回两者下标
        } else {
            map.set(nums[i], i); // 没有的话就记录当前的值和下标，可能未来会被作为temp找到
        }       
    }
};

console.log(twoSum2([2,7,11,15], 9));
console.log(twoSum2([3,2,4], 6));
console.log(twoSum2([3,3], 6));