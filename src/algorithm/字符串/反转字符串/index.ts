function reverseString(s: string[]) {
    let leftIndex = 0;
    let rightIndex = s.length-1;
    while(leftIndex < rightIndex) {
        const temp = s[leftIndex];
        s[leftIndex] = s[rightIndex];
        s[rightIndex] = temp;
        leftIndex+=1;
        rightIndex-=1;
    }
};