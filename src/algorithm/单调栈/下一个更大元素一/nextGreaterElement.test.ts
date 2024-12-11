import { nextGreaterElement } from './nextGreaterElement';
describe("下一个更大数一",()=>{
  test('test1',()=>{
    expect(nextGreaterElement([4,1,2],[1,3,4,2])).toEqual([-1,3,-1]);
  })
  test('test2',()=>{
    expect(nextGreaterElement([2,4],[1,2,3,4])).toEqual([-1,3,-1]);
  })
});