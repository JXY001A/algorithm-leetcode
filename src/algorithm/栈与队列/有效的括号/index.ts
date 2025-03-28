export function isValid(s: string): boolean {
    if(!s) return false;
    const stack:string[] = [];

    const leftBucketMap:Record<string,string> = {
        '(':')',
        '[':']',
        '{':'}',
    };

    for(let i=0;i<s.length;i+=1) {
        const curBucket = s[i];
        if(leftBucketMap[curBucket]) {
            stack.push(curBucket);
        }else {
            const leftBucket = stack.pop() || '';
            if(leftBucketMap?.[leftBucket] !== curBucket) {
                return false;
            }
        }
    }

    if(stack.length > 0) {
        return false;
    }

    return true;
};