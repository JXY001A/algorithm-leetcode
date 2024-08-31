/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let fastIndex =0;
  let slowIndex =0;

  // TODO: 这里是一个技巧，如果慢指针与快指针指向数值相同且不等于目标值的情况下会无效覆盖，但是主要作用是让 slow 指针随着 fast 指针快速移动过无效的指向，直到遇目标数值 slow 就会停下来，直到 fast 再次找到一个不等于目标值的节点然后用它覆盖
  // 慢指针，然后慢指针继续向前，重复这个过程直到快指针扫描完整个数组
  for(;fastIndex<nums.length;fastIndex+=1) {
    if(nums[fastIndex]!==val) {
      nums[slowIndex++] = nums[fastIndex];
    }
  }
  return slowIndex;
};