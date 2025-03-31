const reverse = (strArr:string[],start,end)=>{
    while(start<end) {
        [strArr[start],strArr[end]] = [strArr[end],strArr[start]];
        start+=1;
        end-=1;
    }
}

export function reverseStr(s: string, k: number): string {
    // 1. 每 2k 个字符反转前 k 个字符
    // 2. 不足 2k 个字符，但大于 k, 反转前 k 个字符
    // 3. 不足 k 个字符则反转全部
    // 也就是说 每次反转的起点是计算 2k 字符开始位置，然后反转 k 个字符。
    
    const sArray = s.split('');
    for(let i=0;i<sArray.length;i+=(2*k)) {
        // 满足条件  1，2
        // TODO: 注意⚠️ 索引通过加数字增量的时候记得减1，转换为索引
        if(i+k-1 < sArray.length) {
            reverse(sArray,i,i+k-1);
        }else {
        // 满足条件 3
            reverse(sArray,i,sArray.length-1);
        }
    } 
    return sArray.join('');
};