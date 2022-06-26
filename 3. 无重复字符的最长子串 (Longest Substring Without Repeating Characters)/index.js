/**
 * @param {string} s
 * @return {number}
 */

/**
 * 解法一：滑动窗口（reduce累加器）
 * 思路：
 * （1）先判断字符串 s 的长度，如果 s.length <= 1 直接返回 s.length
 * （2）将字符串 s 转成数组，这样就可以用数组的 reduce 累加器
 * （3）reduce 滑动窗口过程处理（详细过程看以下代码），返回最长子串的长度 maxLen
 * 时间复杂度：O(n)，n 代表字符串长度，reduce 会将字符串的每一个字符都遍历一遍
 * 空间复杂度：O(n)，n 代表字符串长度，将字符串转成了数组（额外空间）
 */
var lengthOfLongestSubstring1 = function(s) {
    if (s.length <= 1) return s.length
    let strArr = s.split('');
    let maxLen = 0;

    strArr.reduce((total, cur) => { 
        const idx = total.indexOf(cur);
        total += cur;// 拼接到最新子串尾部
    
        if (idx === -1) { // 如果最新的无重复最长子串没有 cur 字符
            maxLen = Math.max(maxLen, total.length);// 更新 maxLen
        }else {
            total = total.slice(idx + 1); // 从相同字符的下一位开始截，细节要注意
        }

        return total; // 成为下一次的 total
    }, '')

    return maxLen;
};

/**
 * 解法二：滑动窗口（双指针&哈希）
 * 思路：
 * （1）先判断字符串 s 的长度，如果 s.length <= 1 直接返回 s.length
 * （2）窗口左右界都从数组首部开始，每次窗口优先右移右界，并统计进入窗口的元素的出现频率。
 * （3）一旦右界元素出现频率大于1，就需要右移左界直到窗口内不再重复，将左边的元素移除窗口的时候
 *     同时需要将它在哈希表中的频率减1，保证哈希表中的频率都是窗口内的频率。
 * （4）每轮循环维护最长子串的长度 maxLen
 * 时间复杂度：O(n)，外循环窗口右界从数组首右移到数组尾，内循环窗口左界同样如此，因此复杂度为O(n + n) = O(n)
 * 空间复杂度：O(n)，最坏情况整个数组都是不重复的，哈希表的长度就是数组长度
 */
var lengthOfLongestSubstring2 = function(s) {
    if (s.length <= 1) return s.length;
    let map = new Map();
    let maxLen = 0;
   
    for (let left = 0, right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) + 1);
        }else {
            map.set(s[right], 1);
        }

        while (map.get(s[right]) > 1) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1); // 每轮循环维护一个maxLen 
    }

    return maxLen;
};

// 自己写的滑动窗口
var lengthOfLongestSubstring = function(s) {
  if (s === "") return 0;
  let i = 0; let j = 1; let maxLen = 1;
  while (j < s.length) {
      let cur = s.slice(i, j); 
      if (cur.indexOf(s[j]) !== -1) {
				i++;
				j = i + 1;
       }else {
				cur += s[j]; 
				if (cur.length > maxLen) maxLen = cur.length;
				j++;
      } 
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("dvdf")); // 3

