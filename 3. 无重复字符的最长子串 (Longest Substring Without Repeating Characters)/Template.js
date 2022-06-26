/**
 * @param {string} s
 * @return {number}
 */
/**
 * 解法一：滑动窗口（reduce累加器）
 * 时间复杂度：O(n)，n 代表字符串长度，reduce 会将字符串的每一个字符都遍历一遍
 * 空间复杂度：O(n)，n 代表字符串长度，将字符串转成了数组（额外空间）
 */
// var lengthOfLongestSubstring = function(s) {
   
// };

/**
 * 解法二：滑动窗口（双指针&哈希）
 * 时间复杂度：O(n)，外循环窗口右界从数组首右移到数组尾，内循环窗口左界同样如此，因此复杂度为O(n + n) = O(n)
 * 空间复杂度：O(n)，最坏情况整个数组都是不重复的，哈希表的长度就是数组长度
 */
var lengthOfLongestSubstring = function(s) {
    
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("dvdf")); // 3

