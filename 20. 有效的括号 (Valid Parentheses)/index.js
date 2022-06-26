/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * 解法一：栈
 * 思路：
 *（1）左括号，压栈
 *（2）右括号，则判断栈顶是否匹配（是否出栈）否则直接 return false
 * (3) 最后 return stack.length === 0
 * 时间复杂度：O(n)，其中 n 为字符串长度
 * 空间复杂度：O(n)，最坏情况下栈空间记录整个字符串长度的右括号
 */
function isMatch(left, right) {
  if ((left === '{' && right === '}') 
  || (left === '[' && right === ']') 
  || (left === '(' && right === ')')) return true;

  return false;
}

function isLeftBracket(s) {
  return s==='[' || s==='{' || s==='(';
}

function isRightBracket(s) {
  return s===']' || s==='}' || s===')';
}

var isValid = function(s) {
  let stack = [];

  let inputArr = s.split('');

  for (let i = 0; i < inputArr.length; i++) {
    if (isLeftBracket(inputArr[i])) stack.push(inputArr[i]);

    if (isRightBracket(inputArr[i])) {
      let top = stack.pop()
      if (!isMatch(top, inputArr[i])) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('()[]{}'));
console.log(isValid('()'));
console.log(isValid('([)]'));