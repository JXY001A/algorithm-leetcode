/**
 * @param {number[]} nums
 * @return {number[]}
 */


const power2 = (n)=>{
  return Math.pow(n,2);
}

var sortedSquares = function(nums) {
  let left = 0;
  let right = nums.length-1;
  const target = [];
  while(right>=left) {
    
    if(power2(nums[right]) > power2(nums[left])) {
      target.unshift(power2(nums[right]));
      right-=1;
    }else {
      target.unshift(power2(nums[left]));
      left+=1;
    }
  }
  return target;
};


const test = nums = [-7,-3,2,3,11]
const target = [4,9,9,49,121]

console.log('sortedSquares', sortedSquares(test))
