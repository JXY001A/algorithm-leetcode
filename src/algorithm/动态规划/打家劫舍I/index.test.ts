import { rob } from "./index";

describe("打家劫舍I",()=>{
    test("rob 1", () => {
        expect(rob([1,2,3,1])).toBe(4);
    }); 

    test("rob 2", () => {
        expect(rob([2,7,9,3,1])).toBe(12);
    }); 
});

