/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let sum = 0;
  let targetLength = Number.MAX_SAFE_INTEGER;  
  let j=0;
  for(let i=0;i<nums.length;i+=1) {
    sum+=nums[i];
    while(sum>=target) {
      targetLength = Math.min(targetLength,(i-j+1));
      sum-=nums[j++];
    }
  }
  return targetLength === Number.MAX_SAFE_INTEGER ? 0 : targetLength;
};


const target = 7;
const nums = [2,3,1,2,4,3];
const result = 2;

console.log('minSubArrayLen', minSubArrayLen(target,nums))