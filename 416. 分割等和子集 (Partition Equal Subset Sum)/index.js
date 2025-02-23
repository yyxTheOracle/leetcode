/**
 * @param {number[]} nums
 * @return {boolean}
 */

// https://www.bilibili.com/video/BV1rt4y1N7jE/?spm_id_from=333.788&vd_source=bcc1e77581b1b05c27e244c5dad23a38

// 动态规划 (0-1 背包)

var canPartition = function (nums = []) {
  const sum = nums.reduce((pre, curr) => pre + curr);

  if (sum & 1) {
    return false; // 和为奇数时，必不能拆分
  }

  const target = sum / 2;

  const dp = Array.from({ length: target + 1 }).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  return dp[target] === target;
};

console.log(canPartition([1, 5, 11, 5])); // true, 数组可以分割成 [1, 5, 5] 和 [11]
console.log(canPartition([1, 2, 3, 5])); // false, 数组不能分割成两个元素和相等的子集
