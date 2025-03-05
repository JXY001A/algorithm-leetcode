export function combine(n: number, k: number): number[][] {
    const result:number[][] = [];

    const _combine = (start:number,path:number[],n:number)=>{
        if(path.length === k) {
            result.push([...path]);
            return ;
        }

        for(let i=start;i<=n-(k-path.length)+1;i+=1) {
            path.push(i);
            _combine(i+1,path,n);
            path.pop();
        }
    }
    _combine(1,[],n);
    return result;
}