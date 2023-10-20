/**
 * @param {number} n
 * @return {number}
 */
/* 
  1. 确定 dp 数组以及下标的含义：dp[i] 的定义为：达到第 i 阶楼梯，有 dp[i] 种方法
  2. 确定递推公式：状态转移⽅程 dp[i] = dp[i - 1] + dp[i - 2]
    * 第 i - 1 阶楼梯再走一步，或者第 i - 2 阶楼梯再走两步，所以是 dp[i - 1] + dp[i - 2] 
  3. 初始化 dp 数组： dp[1] = 1， dp[2] = 2
  4. 确定遍历顺序： dp[i] 是依赖 dp[i - 1] 和 dp[i - 2] ，所以遍历的顺序是从前到后遍历
*/

var climbStairs = function (n) {
  if (n < 3) return n;
  let dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

console.log(climbStairs(30)); // 1346269
