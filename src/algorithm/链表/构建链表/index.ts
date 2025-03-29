type Node = {
    val:number|null;
    next:Node | null;
};

const createNode = (val:number|null):Node=>{
    return {val,next:null};
}
export const buildLinkedList = (vals:number[]):Node|null=>{
    const headerRoot = createNode(null);
    let next = headerRoot;
    for(let i=0;i<vals.length;i+=1) {
        next.next = createNode(vals[i]);
        next = next.next;
    }
    return headerRoot.next;
}