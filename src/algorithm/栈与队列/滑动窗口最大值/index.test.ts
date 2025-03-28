import {maxSlidingWindow } from './index';
describe("逆波兰表达式求值",()=>{
  test('maxSlidingWindow 1',()=>{
    expect(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)).toEqual([3,3,5,5,6,7]);
  })

  test('maxSlidingWindow 2',()=>{
    expect(maxSlidingWindow([1],1)).toEqual([1]);
  })
});