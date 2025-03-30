import {reverseList } from './index';
import {buildLinkedList } from '../../链表/构建链表'
describe("反转链表",()=>{
  test('reverseList 1',()=>{
    const head = buildLinkedList([1,2,3,4,5]);
    const target = buildLinkedList([5,4,3,2,1]);
    expect(reverseList(head)).toEqual(target);
  }); 

  test('reverseList 2',()=>{
    const head = buildLinkedList([1,2]);
    const target = buildLinkedList([2,1]);
    expect(reverseList(head)).toEqual(target);
  }); 

  test('reverseList 3',()=>{
    const head = buildLinkedList([]);
    const target = buildLinkedList([]);
    expect(reverseList(head)).toEqual(target);
  }); 

});