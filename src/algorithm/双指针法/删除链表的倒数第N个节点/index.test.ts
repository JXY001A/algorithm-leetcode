import {removeNthFromEnd } from './index';
import {buildLinkedList } from '../../链表/构建链表'
describe("删除链表的倒数第N个节点",()=>{
  test('removeNthFromEnd 1',()=>{
    const head = buildLinkedList([1,2,3,4,5]);
    const target = buildLinkedList([1,2,3,5]);
    expect(removeNthFromEnd(head,2)).toEqual(target);
  }); 

  test('removeNthFromEnd 2',()=>{
    const head = buildLinkedList([1]);
    const target = buildLinkedList([]);
    expect(removeNthFromEnd(head,1)).toEqual(target);
  }); 

  test('removeNthFromEnd 3',()=>{
    const head = buildLinkedList( [1,2]);
    const target = buildLinkedList([1]);
    expect(removeNthFromEnd(head,1)).toEqual(target);
  }); 

});