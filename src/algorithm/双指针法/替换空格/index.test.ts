import {pathEncryption } from './index';
describe("替换空格",()=>{
  test('pathEncryption 1',()=>{
    const path = "a aef qerf bb"
    const target = "a%20aef%20qerf%20bb";
    expect(pathEncryption(path)).toEqual(target);
  }); 
});