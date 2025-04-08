export  const trap = (height: number[])=>{
    let sum = 0;

    for(let i=0;i<height.length;i+=1) {
        if(i===0 || i===height.length-1) continue;

        let leftHeight = height[i];
        let rightHeight = height[i];

        for(let j=i-1;j>=0;j-=1) {
            leftHeight = Math.max(leftHeight,height[j]); 
        }

        for(let j=i+1;j<height.length;j+=1) {
            rightHeight = Math.max(rightHeight,height[j]);
        }

        const h = Math.min(leftHeight,rightHeight) - height[i];
        sum+=h;
    }

    return sum;
}

