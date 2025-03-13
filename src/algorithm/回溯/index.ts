
const DigitsLetterMap = {
    2:"abc", 
    3:"def", 
    4:"ghi", 
    5:"jkl", 
    6:"mno", 
    7:"pqrs", 
    8:"tuv", 
    9:"wxyz", 
};

export function letterCombinations(digits: string): string[] {
    const result = [];
    const digitsLetter:string[] = [];
    for(let i=0;i<digits.length;i+=1) {
        if(DigitsLetterMap[digits[i]]) {
            digitsLetter.push(DigitsLetterMap[digits[i]]);
        }
    }
    letterCombinationsRecursive(0,digitsLetter,'',result);
    return result;
};


const letterCombinationsRecursive = (start:number,digitsLetter:string[],path:string,result:string[])=>{

    if(path.length === digitsLetter.length && path.length!==0) {
        result.push(path);
        return;
    }
    if(start>=digitsLetter.length) return;

    const letters = digitsLetter[start];
    
    for(let i=0;i<letters.length;i+=1) {
        letterCombinationsRecursive(start+1,digitsLetter,path+letters[i],result); 
    }
}
