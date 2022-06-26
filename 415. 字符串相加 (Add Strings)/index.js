/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

/**
 * 解法一：模拟法（双尾指针法）
 * 思路：模拟我们日常加法进位过程，详细过程看代码
 * 时间复杂度：O(n)，其中 n 为较长字符的长度，遍历字符串
 * 空间复杂度：O(1)，常数级空间
 */
var addStrings = function(num1, num2) {
  if (num2.length === 0) return num1;
  if (num2.length === 0) return num1;
  // 以 456 + 77 的第一次为例, num1 = 456, num2 = 77
  let i = num1.length - 1; // 2，指向 num1 尾部
  let j = num2.length - 1; // 1，指向 num2 尾部
  let extra = 0; // 进位 
  let res = []; // 结果数组

  while (i >= 0 || j >= 0 || extra !== 0) {
    let s = arr1[i] * 1 || 0; // 6
    let t = arr2[j] * 1 || 0; // 7
    let sum = s + t + extra; // 13
    extra = ( sum >= 10 ? 1 : 0); // 进位，留给下次用
    let remainder = sum % 10; // 3，计算当前位(求余)
    res.unshift(remainder); // 将数字转字符串插入 res 头部
    i--;
    j--;
  }

  return res.join("");
};

console.log(addStrings("456", "77")); // 533
console.log(addStrings("11", "123")); // 134
console.log(addStrings("0", "0")); // 0
