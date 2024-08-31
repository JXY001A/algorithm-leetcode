/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let templHead = {
    next:null
  };

  let next = head;
  // 核心思想：假定存在一个虚拟的新 head 且 next 指向空，然后每遍历到一个节点将这个阶段取出来当作新的 head 节点，同时指向原来 head 节点的 next；到这里遍历到的这个节点连接完成。需要继续下一个，而下一个节点恰好是新 head
  // 节点的 next 节点，为防止覆盖后提示，故而提前缓存。连接完成后重新指向 next ,继续循环，直至 null 为止 
  while(next) {
    const templNode = templHead.next; 
    const templNext = next.next;
    templHead.next = next;
    templHead.next.next = templNode;

    next = templNext;
  }

  return templHead.next;
};