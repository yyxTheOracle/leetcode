/**
 * @param {number} n
 * @return {number}
 */

/* 
  1. 确定 dp 数组以及下标的含义：dp[i] 的定义为：爬到 i 位置的最小花费为 dp[i]
  2. 确定递推公式：
    2.1 状态转移⽅程 dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  3. 初始化 dp 数组： dp[0] = 0， dp[1] = 0（站在 0 或 1 位置不耗费体力值，跳的时候才花费体力值）
  4. 确定遍历顺序： dp[i] 是依赖 dp[i - 1] 和 dp[i - 2] ，所以遍历的顺序是从前到后遍历
*/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const n = cost.length; // 注意这里，最后要爬到下标 n 的位置 (cost 数组最后一个元素的后一个位置)
  const dp = new Array(n + 1);
  dp[0] = dp[1] = 0;
  for (let i = 2; i <= n; i++) {
      dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
};

console.log(minCostClimbingStairs([10, 15, 20])) // 6
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])) // 6