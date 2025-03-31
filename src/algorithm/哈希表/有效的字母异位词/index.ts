export function isAnagram(s: string, t: string): boolean {
    const charMap = Array(26).fill(0);
    const startCharCode = 'a'.charCodeAt(0);
    for(let i=0;i<s.length;i+=1) {
        const curCharCode = s.charCodeAt(i)-startCharCode;
        charMap[curCharCode]+=1;
    }
    for(let j=0;j<t.length;j+=1)  {
        const curCharCode = t.charCodeAt(j) - startCharCode;
        if(charMap[curCharCode]>0) {
            charMap[curCharCode]-=1;
        }else {
            return false;
        }
    }
    
    for(let t=0;t<charMap.length;t+=1) {
        if(charMap[t] !== 0) return false;
    }
    return true;
};
