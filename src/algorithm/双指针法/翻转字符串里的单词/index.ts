const reverse = (str:string)=>{
    const strArr = str.split('');
    let leftIndex=0;
    let rightIndex = str.length-1;
    while(leftIndex < rightIndex) {
        [strArr[leftIndex],strArr[rightIndex]] = [strArr[rightIndex],strArr[leftIndex]];
        leftIndex+=1;
        rightIndex-=1;
    }

    return strArr.join('');
}
export function reverseWords(s: string): string {
    const sReverse = reverse(s);
    const wordsReverse = sReverse.split(' ').filter((item)=>!!item).map(item=>reverse(item));

    return wordsReverse.join(' ');
};