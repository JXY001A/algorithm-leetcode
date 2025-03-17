export function restoreIpAddresses(s: string): string[] {
    const result:string[] = [];

    restoreIpAddressesRecursive(0,s,[],result);
    return result;
};

const restoreIpAddressesRecursive = (start:number,s:string,path:string[],result:string[])=>{
    if(start>=s.length) {
        if(path.length === 4) {
            result.push(path.join('.'));
        }
        return;
    }

    for(let i=start;i<start+3 && i<s.length;i+=1) {
        const ipPart = s.substring(start,i+1);
        if((ipPart.length>1 && ipPart.startsWith('0')) || Number(ipPart)>255) {
            continue;
        }
        path.push(ipPart);
        restoreIpAddressesRecursive(i+1,s,path,result);
        path.pop();
    }
}
