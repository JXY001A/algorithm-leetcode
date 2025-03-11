export function combine(n: number, k: number): number[][] {
    const result: number[][] = [];
    
    const _combine = (n:number,start:number,path:number[])=>{
        if(path.length === k) {
            result.push([...path]);
            return;
        }

        for(let i=start;i<=n;i+=1) {
            path.push(i);
            _combine(n,i+1,path);
            path.pop();
        }
    }

    _combine(n,1,[]);
    
    return result;

};

