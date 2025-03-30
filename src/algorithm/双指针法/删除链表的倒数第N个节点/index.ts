type ListNode =  {
    val:number|null;
    next:ListNode|null;
};

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fast:ListNode | null | undefined = head;
    while(n>0) {
        // TODO: 题目限定 n 的取之范围为 [1,sz],其中 sz 表示链表的长度;故而无需考虑被删除节点不存在的情况
        fast = fast?.next;
        n-=1;
    }

    let slow:ListNode | null  = head;
    let prev:ListNode | null  = null;

    while(fast) {
        prev = slow;
        slow = slow?.next!;

        fast = fast.next;
    }

    if(prev && slow) {
        prev.next = slow.next;
        slow.next = null;
        return head;
    }else {
        return slow?.next!;
    }
};