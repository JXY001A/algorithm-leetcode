
export function isHappy(n: number): boolean {
    const nRecord:Record<string,boolean> = {};
    while(n!==1) {
        if(nRecord[n] || n ===0) return false;
        let temp = n;
        let newN = 0;
        while(temp>0) {
            newN+= Math.pow((temp%10),2);
            temp = Math.trunc(temp/10);
        }
        nRecord[n] = true; 
        n = newN;
    }
    return true;
};