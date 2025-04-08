export function generateMatrix(n: number): number[][] {
    const result:number[][] = Array(n).fill(0).map(()=> Array(n).fill(0));
    let loop = Math.floor(n/2);
    let mid = Math.floor(n/2);
    let count = 1;

    let startX =0;
    let startY =0;
    let offset = 1;

    while(loop>0) {
        let col = startX;
        let row = startY;
        for(;col<n-offset;col+=1) {
            result[row][col] = count++;
        }
        for(;row<n-offset;row+=1){
            result[row][col] = count++;
        }

        for(;col>startX;col-=1) {
            result[row][col] = count++;
        }

        for(;row>startY;row-=1) {
            result[row][col] = count++;
        }

        startX+=1;
        startY+=1;

        offset+=1;
        loop-=1;
    }

    if(n%2!==0) {
        result[mid][mid] = count;
    }
    return result;
};