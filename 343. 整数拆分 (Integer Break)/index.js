/**
 * @param {number} n
 * @return {number}
 */

// https://www.bilibili.com/video/BV1Mg411q7YJ/?spm_id_from=333.788&vd_source=bcc1e77581b1b05c27e244c5dad23a38

/* 方法：动态规划
  1. 确定 dp 数组以及下标的含义：dp[i] 的定义为：对正整数 i 拆分后得到的最大乘积
  2. 前面的代码中的正整数 n 变成了这里的正整数 i，用指针 j 去划分 i，分成了 j 和 i - j
  3. 遍历所有的 j，i - j 可以选择拆或不拆，不拆就是 i - j，拆就是 dp[i - j]，其实就是对 i - j 调用的结果，
  （子问题的解）
*/
var integerBreak = function (n) {
  const dp = new Array(n + 1);

  dp[1] = dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    dp[i] = 0;
    // 从 1 开始拆，举例子能更好地理解这段代码
    for (let j = 1; j <= i - j; j++) {
      // j * (i - j) 就是拆成 2 个数，j * dp[i - j] 就是拆成 3 个及以上的数
      dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i]);
    }
  }

  return dp[n];
};

console.log(integerBreak(2)); // 1
console.log(integerBreak(10)); // 36
