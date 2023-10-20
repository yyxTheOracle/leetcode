/**
 * @param {number} m 行数
 * @param {number} n 列数
 * @return {number}
 */

// https://www.bilibili.com/video/BV1ve4y1x7Eu/?spm_id_from=333.788&vd_source=bcc1e77581b1b05c27e244c5dad23a38

/* 方法：动态规划
  * 因为是二维矩阵，所以定义一个二维的 dp 数组，记录每一格的状态 
  1. 确定 dp 数组以及下标的含义：dp[i][j] 的定义为：从 (0, 0) 到 (i, j) 有 dp[i][j] 种方法
  2. 确定递推公式：看图分析，状态转移⽅程 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  3. 初始化 dp 数组：
    * 需要初始化第一行和第一列，否则无法进行后续推导
    * dp[i][0] = 1; dp[0][j] = 1（只能向下或者向右，无法向上）
  4. 确定遍历顺序： dp[i][j] 是依赖 dp[i - 1][j] 和 dp[i][j - 1] ，所以遍历的顺序是从上到下、从左往右
*/
var uniquePaths = function (m, n) {
  // m 为行数，n 为列数
  const dp = new Array(m);
  for (let i = 0; i < m; i++) dp[i] = new Array(n);

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1; // 初始化第一行数据
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1; // 初始化第一列数据
  }

  for (let i = 1; i < m; i++) {
    // 从上到下，从左到右，不能 m 和 n 颠倒
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
