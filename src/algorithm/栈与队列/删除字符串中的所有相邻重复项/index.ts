export function removeDuplicates(s: string): string {
    if(!s) return s;
    const stack:string[] = [];
    for(let i=0;i<s.length;i+=1) {
        const curChar = s[i];
        if(stack.length ===0) {
            stack.push(curChar);
        }else {
            const stackTopChar = stack[stack.length-1];
            if(stackTopChar === curChar) {
                stack.pop();
            }else {
                stack.push(curChar);
            }
        }
    }
    return stack.join('');
};