/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

/**
 * 解法一：分割截取
 * 时间复杂度：O(max(n, m))
 * 空间复杂度：O(max(n, m))
 */
function compareVersion(version1 = "", version2 = "") {
  
};

console.log(compareVersion('1.01.1.1', '1.001')); // 1
console.log(compareVersion('1.0', '1.0.0')); // 0
console.log(compareVersion('0.1', '1.1')); // -1
