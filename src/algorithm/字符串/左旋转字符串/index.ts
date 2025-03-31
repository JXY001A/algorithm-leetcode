
const reverse = (strArray:string[],start:number,end:number)=>{
    while(start<end) {
        [strArray[start],strArray[end]] = [strArray[end],strArray[start]];
        start+=1;
        end-=1;
    }
}
export const reverseLeftWords = (s:string,n:number)=>{
    const sArrReverse = s.split('').reverse();
    
    reverse(sArrReverse,0,sArrReverse.length-n-1);
    reverse(sArrReverse,sArrReverse.length-n,sArrReverse.length-1);
    return sArrReverse.join('');
}