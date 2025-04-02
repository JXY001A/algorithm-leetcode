export function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const sumRecord:Record<string,number> = {};
    for(let i=0;i<nums1.length;i+=1) {
        for(let j=0;j<nums2.length;j+=1) {
            const sum = nums1[i] + nums2[j];
            if(!sumRecord[sum]) {
                sumRecord[sum]=1;
            }else {
                sumRecord[sum]+=1;
            }
        }
    }
    let count = 0;
    for(let t=0;t<nums3.length;t+=1) {
        for(let k=0;k<nums4.length;k+=1) {
            const sum = -(nums3[t] + nums4[k]);
            if(sumRecord[sum]) {
                count+=sumRecord[sum];
            }  
        }
    }
    return count;
};