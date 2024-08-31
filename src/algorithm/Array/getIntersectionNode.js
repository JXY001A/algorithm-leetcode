/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
  let ha = headA;
  let hb = headB;
  let switchCount = 2;
  /**
   * 核心思想： lengthA + lengthB = lengthB + lengthA
   * */ 
  while(ha &&  ha !== hb && switchCount>=0) {
    if(ha.next) {
      ha = ha.next;
    }else {
      ha =  headB;
      switchCount-=1;
    }

    if(hb.next) {
      hb = hb.next;
    }else {
      hb = headA;
      switchCount-=1;
    }
  }

  return ha === hb ? ha : null;
};