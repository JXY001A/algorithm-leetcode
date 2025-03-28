import {reverseString } from './index';
describe("反转字符串",()=>{
  test('reverseString 1',()=>{
    const str = ["h","e","l","l","o"];
    const target = ["o","l","l","e","h"];
    expect(reverseString(str)).toEqual(target);
  }); 

  test('reverseString 2',()=>{
    const str = ["H","a","n","n","a","h"];
    const target = ["h","a","n","n","a","H"];
    expect(reverseString(str)).toEqual(target);
  }); 
});