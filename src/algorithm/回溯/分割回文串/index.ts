
const isPalindrome  = (s:string,start:number,end:number)=>{
    for(let i=start,j=end;i<=j;i+=1,j-=1){
        if(s[i]!==s[j]) return false;
    }
    return true;
}

const partitionRecursive = (start:number,path:string[],s:string,result:string[][])=>{
    if(start>=s.length) {
        if(path.length>0) {
            result.push([...path]);
        }
        return;
    }

    for(let i=start;i<s.length;i+=1) {
        if(isPalindrome(s,start,i)) {
            const palindromeStr = s.substring(start,i+1);
            path.push(palindromeStr);
            partitionRecursive(i+1,path,s,result);
            path.pop();
        }
    }
}

export function partition(s: string): string[][] {
    const result:string[][] = [];
    partitionRecursive(0,[],s,result);
    return result;
};