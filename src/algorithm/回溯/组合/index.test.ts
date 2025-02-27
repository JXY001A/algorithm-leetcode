import { combine } from "./index";

describe("组合",()=>{
    test("combine 1", () => {
        expect(combine(4,2)).toBe([
            [2,4],
            [3,4],
            [2,3],
            [1,2],
            [1,3],
            [1,4],
        ]);
    }); 

    test("combine 2", () => {
        expect(combine(1,1)).toBe([[1]]);
    }); 
});

