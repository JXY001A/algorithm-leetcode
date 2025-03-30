type ListNode =  {
    val:number|null;
    next:ListNode|null;
};


export var getIntersectionNode = function(headA:ListNode, headB:ListNode) {
    let cycleCount = 0;
    let nodeA:ListNode|null = headA;
    let nodeB:ListNode|null = headB;
    while(cycleCount<=2) {
        if(nodeA === nodeB) {
            return nodeA;
        }

        if(!nodeA) {
            nodeA = headB;
            cycleCount+=1;
        }else {
            nodeA=nodeA.next;
        }

        if(!nodeB) {
            nodeB = headA;
            cycleCount+=1;
        }else {
            nodeB = nodeB.next;
        }
    }
    return null;
};