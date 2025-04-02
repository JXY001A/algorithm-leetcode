export function canConstruct(ransomNote: string, magazine: string): boolean {
    const record = Array(26).fill(0);
    const startCharCode = 'a'.charCodeAt(0);
    for(let i=0;i<magazine.length;i+=1) {
        const charCode  = magazine.charCodeAt(i)-startCharCode;
        record[charCode]+=1;
    }

    for(let j=0;j<ransomNote.length;j+=1) {
        const charCode  = ransomNote.charCodeAt(j)-startCharCode; 
        record[charCode]-=1;
        if(record[charCode]<0) {
            return false;
        }
    }
    return true;
};