export function combine(n: number, k: number): number[][] {
    const result:number[][] = [];

    const _combine = (start:number,path:number[],n:number)=>{
        if(path.length === k) {
            result.push([...path]);
            return ;
        }
        //J加 1 的含义：若 n = 4，k = 3， 目前已经选取的元素为0（path.size为0），n - (k - 0) + 1 即 4 - ( 3 - 0) + 1 = 2
        //所以只能从 1 和 2 开始：分别有 [1,2,3],[1,3,4] 以及 [2,3,4]；其他情况都不满足 k 个数条件
        for(let i=start;i<=n-(k-path.length)+1;i+=1) {
            path.push(i);
            _combine(i+1,path,n);
            path.pop();
        }
    }
    _combine(1,[],n);
    return result;
}