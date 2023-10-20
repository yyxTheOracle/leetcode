/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// https://www.bilibili.com/video/BV1Ld4y1k7c6/?spm_id_from=333.788&vd_source=bcc1e77581b1b05c27e244c5dad23a38

var uniquePathsWithObstacles = function (obstacleGrid = []) {
  const m = obstacleGrid.length; // 行数
  const n = obstacleGrid[0].length; // 列数

  // dp 数组初始化
  const dp = new Array(m);
  for (let i = 0; i < m; i++) dp[i] = new Array(n);

  // 起点或终点有障碍，直接返回 0
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

  dp[0][0] = 1;

  // 第一行，如果当前格有障碍，或到达上一格的方法为 0，则赋值为 0，否则为 1
  for (let i = 1; i < n; i++) {
    dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1;
  }

  // 第一列，如果当前格有障碍，或到达上一格的方法为 0，则赋值为 0，否则为 1
  for (let i = 1; i < m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] =
        obstacleGrid[i][j] === 1 ? 0 : (dp[i][j] = dp[i - 1][j] + dp[i][j - 1]);
    }
  }

  return dp[m - 1][n - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
); // 2
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
); // 1
