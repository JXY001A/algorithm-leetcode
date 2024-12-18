import { nextGreaterElements } from './nextGreaterElements';
describe("下一个更大数一",()=>{
  test('test1',()=>{
    expect(nextGreaterElements([1,2,1])).toEqual([2,-1,2]);
  })
  test('test2',()=>{
    expect(nextGreaterElements([1,2,3,4,3])).toEqual([2,3,4,-1,4]);
  })
});