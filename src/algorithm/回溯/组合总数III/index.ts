export function combinationSum2(candidates: number[], target: number): number[][] {
    const result:number[][] = [];
    const candidatesSorted = candidates.sort((a,b)=>a-b);
    combinationSum2Recursive(0,candidatesSorted,target,[],result);
    return result;
};

const combinationSum2Recursive = (start:number,candidates: number[],target:number,path:number[],result:number[][])=>{
    if(target<0) {
        return;
    }
    if(target === 0) {
        result.push([...path]);
        return;
    }

    for(let i=start;i<candidates.length;i+=1) {
        if(i!==start && candidates[i]===candidates[i-1]) continue;
        path.push(candidates[i]);
        combinationSum2Recursive(i+1,candidates,target-candidates[i],path,result);
        path.pop();
    }

}