/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  /** 慢指针，指向下一个不等于 val 的元素需要放的位置 */
  let slow = 0;

  // 快指针遍历数组
  // 1. 若找到等于 val 的元素，只更新快指针；
  // 2. 若找到不等于 val 的元素，则将其放到慢指针所指向的位置，并更新慢指针和快指针。
  for (const currNum of nums) {
    // 寻找不等于 val 的元素
    if (currNum !== val) {
      // 将其放到慢指针的位置
      nums[slow] = currNum;
      // 更新慢指针
      slow++;
    }
  }

  return slow;
};
