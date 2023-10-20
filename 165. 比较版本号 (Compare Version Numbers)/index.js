/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

/**
 * 解法一：分割截取(和我自己做的思路一样，更优雅)
 * 思路：
 *（1）先根据.号分割成字符串数组，获取两个数组中的最大长度值，
 *（2）按顺序遍历比较，详细过程看以下代码
 * 时间复杂度：O(max(n, m))
 * 空间复杂度：O(max(n, m))
 */
function compareVersion(version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");
  const maxLen = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLen; i++) {
    // arr1[i] - '0' ，js 会强制转换成 number 然后相减
    // 例如：（'01' - '0'）， 结果是 1 （number 类型）
    const num1 = arr1[i] ? arr1[i] - "0" : 0;
    const num2 = arr2[i] ? arr2[i] - "0" : 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}

// 自己做出来了
// var compareVersion = function(version1, version2) {
//     let v1 = version1.split('.');
//     let v2 = version2.split('.');
//     let diff; // 数组长度差
//     v1 = v1.map((item) => {
//         if (parseInt(item) === 0) {
//             return 0;
//         }else {
//             item = item.replace(/^0+/, '');
//             return parseInt(item);
//         }
//     }) // 每个数组元素转为数字，去除前导0

//     v2 = v2.map((item) => {
//         if (parseInt(item) === 0) {
//             return 0;
//         }else {
//             item = item.replace(/^0+/, '');
//             return parseInt(item);
//         }
//     }) // 每个数组元素转为数字，去除前导0

//     if (v1.length > v2.length) {
//         diff = v1.length - v2.length;
//         for (let i = 0; i < diff; i++) {
//            v2.push(0);
//         }
//     }else if(v1.length < v2.length) {
//         diff = v2.length - v1.length;
//         for (let i = 0; i < diff; i++) {
//             v1.push(0);
//          }
//     } // 使两个数组长度相等，给较短的数组补0

//     console.log(v1, v2);

//     for (let i = 0; i < v1.length; i++) {
//         if (v1[i] > v2[i]) {
//             return 1;
//         }else if(v1[i] < v2[i]) {
//             return -1
//         }
//     } // 比较每一位

//     return 0;
// };

console.log(compareVersion("1.01.1.1", "1.001")); // 1
console.log(compareVersion("1.0", "1.0.0")); // 0
console.log(compareVersion("0.1", "1.1")); // -1
