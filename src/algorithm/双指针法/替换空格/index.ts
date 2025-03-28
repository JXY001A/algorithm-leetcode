export function pathEncryption(path: string): string {
    let spaceCount = 0;
    for(let i=0;i<path.length;i+=1) {
        if(path[i] === ' ') {
            spaceCount+=1;
        }
    }

    const newPathArr = Array(path.length + spaceCount*2);

    let i=path.length-1;
    let j=newPathArr.length-1;

    for(;i>=0 && j>=0;i--,j--) {
        if(path[i]!==' ') {
            newPathArr[j]=path[i];
        }else {
            newPathArr[j] = '0';
            newPathArr[j-1] = '2';
            newPathArr[j-2] = '%';
            j-=2;
        }
    }
    
    return newPathArr.join('');
};