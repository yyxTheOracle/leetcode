/**
 * @param {number} n
 * @return {number}
 */

// 方法一：递归
// var fib = function(n) {
//   if (n < 2) return n;
//   return fib(n-1) + fib(n-2); 
// };

// 方法二：动态规划
// 1. 确定 dp 数组以及下标的含义：dp[i] 的定义为：第 i 个斐波那契数值是 dp[i]
// 2. 确定递推公式：题⽬已经把递推公式直接给我们了：状态转移⽅程 dp[i] = dp[i - 1] + dp[i - 2]
// 3. 初始化 dp 数组： dp[0] = 0， dp[1] = 1
// 4. 确定遍历顺序： dp[i] 是依赖 dp[i - 1] 和 dp[i - 2] ，所以遍历的顺序是从前到后遍历
var fib = function(n) {
  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n ; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n]
};

console.log(fib(30)) // 832040