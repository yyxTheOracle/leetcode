/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * 解法一：栈
 * 时间复杂度：O(n)，其中 n 为字符串长度
 * 空间复杂度：O(n)，最坏情况下栈空间记录整个字符串长度的右括号
 */
function isMatch(left, right) {
  if (
    (left === "{" && right === "}") ||
    (left === "[" && right === "]") ||
    (left === "(" && right === ")")
  )
    return true;

  return false;
}

function isLeftBracket(s) {
  return s === "[" || s === "{" || s === "(";
}

function isRightBracket(s) {
  return s === "]" || s === "}" || s === ")";
}

var isValid = function (s = "") {};

console.log(isValid("()[]{}")); // true
console.log(isValid("()")); // true
console.log(isValid("([)]")); // false
