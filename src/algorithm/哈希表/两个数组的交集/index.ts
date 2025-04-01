export function intersection(nums1: number[], nums2: number[]): number[] {
    const nums1Map = {};
    for(let i=0;i<nums1.length;i+=1) {
        if(!nums1Map[nums1[i]]) {
            nums1Map[nums1[i]]=nums1[i];
        }
    }

    const nums2Map = {};
    for(let j=0;j<nums2.length;j+=1) {
        if(!nums2Map[nums2[j]]) {
            nums2Map[nums2[j]]=nums2[j];
        }
    }

    const result:number[] = [];
    Object.keys(nums2Map).forEach((key)=>{
        typeof nums1Map[key] === "number" &&  result.push(nums1Map[key]);
    })


    return result;
};

// 高阶可以使用 Set 去重

export const intersectionSet = (nums1: number[], nums2: number[])=>{
    const nums1Set = new Set(nums1);
    const resultSet = new Set();
    for(let i=0;i<nums2.length;i+=1) {
        nums1Set.has(nums2[i]) && resultSet.add(nums2[i]);
    }
    return [...resultSet];
}