/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while(slow && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if(slow === fast) {
        let templ = head;
        while(templ  !== slow)  {
          templ = templ.next;
          slow = slow.next;
        }
        return slow;
      }
    }

    return null;
};