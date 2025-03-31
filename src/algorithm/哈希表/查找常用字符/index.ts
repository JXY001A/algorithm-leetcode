export  function commonChars(words: string[]): string[] {
    const result:string[] = [];


    const charsCountArray = Array(26).fill(0);
    const charStartCode = 'a'.charCodeAt(0);
    const firstWord = words[0];
    for(let i=0;i<firstWord.length;i+=1) {
        const tempCharCode = firstWord.charCodeAt(i) - charStartCode;
        charsCountArray[tempCharCode]+=1;
    }

    
    for(let i=1;i<words.length;i+=1) {
        const otherCharsCountArray = Array(26).fill(0);
        const currentWord = words[i];
        for(let j=0;j<currentWord.length;j+=1) {
            const tempCharCode = currentWord.charCodeAt(j) - charStartCode;
            otherCharsCountArray[tempCharCode]+=1;
        }
        for(let t=0;t<otherCharsCountArray.length;t+=1) {
            charsCountArray[t] = Math.min(charsCountArray[t],otherCharsCountArray[t]); 
        }
    }

    for(let i=0;i<charsCountArray.length;i+=1) {
        if(charsCountArray[i]>0) {
            let  count = charsCountArray[i];
            while(count>0) {
                result.push(String.fromCharCode(charStartCode+i));
                count-=1;
            }
        }
    }

    return result;
};