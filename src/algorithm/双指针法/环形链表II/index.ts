type ListNode =  {
    val:number|null;
    next:ListNode|null;
};

export function detectCycle(head: ListNode | null): ListNode | null {

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    // cycleCount ： 环的路程数量; straight：非环部分的路程数量;
    // len = cycleCount + straight
    // 快指针是慢指针的两倍
    // fast = 2 * slow 
    // 当快慢指针相遇的时候，也就是快指针上了慢指针，那么快指针走过的距离比慢指针多走 N 个环。 公式如下所示：
    // fast - slow = N * cycleCount;
    // slow = N * cycleCount;
    // 所以可以认为当前慢指针走过了 N 个环的距离
    // 又因为到达环入口位置所要经过的距离以下公式表示：
    // targetLen = straight + N * cycleCount 
    // 最终得出结论：慢指针走过了 N * cycleCount  距离，而我们只需要再走过  straight 部分的距离就可以到达入口节点

    while(fast?.next && slow) {
        fast = fast.next.next;
        slow = slow?.next!;
        
        if(fast === slow) {
            let tempHead = head;
            while(tempHead && slow) {
                if(tempHead === slow) {
                    return tempHead;
                }else {
                    tempHead =tempHead.next;
                    slow = slow.next;
                }
            }
        }
    }

    return null;
};