import { rob } from "./index";

describe("打家劫舍II",()=>{
    test("rob 1", () => {
        expect(rob([2,3,2])).toBe(3);
    }); 

    test("rob 2", () => {
        expect(rob([1,2,3,1])).toBe(4);
    }); 

    test("rob 3", () => {
        expect(rob([0])).toBe(0);
    }); 
});

