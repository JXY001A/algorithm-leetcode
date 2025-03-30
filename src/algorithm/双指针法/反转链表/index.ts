type ListNode =  {
    val:number|null;
    next:ListNode|null;
};

export function reverseList(head: ListNode | null): ListNode | null {
    if(!head) {
        return null;
    }
    let curr:ListNode | null = null;
    let next:ListNode | null = head;
    while(next) {
        const tempNode = next.next;
        next.next = curr;

        curr = next;
        next = tempNode;
    }
    return curr;
};