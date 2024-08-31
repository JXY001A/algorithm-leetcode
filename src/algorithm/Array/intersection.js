/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

  const elementMapCount  = {};

  for(let i=0;i<nums1.length;i+=1) {
    const temlpMap = {};
    if(!temlpMap[nums1[i]]) {
      temlpMap[nums1[i]] = true;
      elementMapCount[nums1[i]] = 1;
    }
  }

  for(let i=0;i<nums2.length;i+=1) {
    const templMap = {};
    if(!templMap[nums2[i]] && elementMapCount[nums2[i]]) {
      templMap[nums2[i]] = true;
      elementMapCount[nums2[i]]-=1;
    }
  }

  const result = [];
  for(let key in elementMapCount) {
    if(elementMapCount[key] === 0) {
      result.push(Number(key));
    }
  }

  return result;
};