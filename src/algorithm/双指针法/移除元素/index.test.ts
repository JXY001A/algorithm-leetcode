import {removeElement } from './index';
describe("移除元素",()=>{
  test('removeElement 1',()=>{
    expect(removeElement([3,2,2,3],3)).toBe(2);

  })  
  test('removeElement 2',()=>{
    expect(removeElement([0,1,2,2,3,0,4,2],2)).toBe(5);
  })  

  test('removeElement 1',()=>{
    expect(removeElement([1],1)).toBe(0);
  })
  
  test('removeElement 1',()=>{
    expect(removeElement([4,5],4)).toBe(1);
  })

  
});