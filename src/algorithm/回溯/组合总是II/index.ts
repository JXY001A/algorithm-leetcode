export function combinationSum(candidates: number[], target: number): number[][] {
    const result:number[][] = [];
    combinationSumRecursive(0,candidates,target,[],result);
    return result;
};

const combinationSumRecursive  = (start:number,candidates: number[], target: number,path:number[],result:number[][])=>{
    if(target<0) return;
    
    if(target === 0 && path.length>0) {
        result.push([...path]);
        return;
    }

    for(let i=start;i<candidates.length;i+=1) {
        path.push(candidates[i]);
        combinationSumRecursive(i,candidates,target-candidates[i],path,result);
        path.pop();
    }
}