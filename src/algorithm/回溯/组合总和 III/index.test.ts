import { combinationSum3 } from "./index";

describe("组合",()=>{
    test("combinationSum3 1", () => {
        expect(combinationSum3(3,7)).toEqual([[1,2,4]]);
    }); 

    test("combinationSum3 2", () => {
        expect(combinationSum3(3,9)).toEqual([[1,2,6], [1,3,5], [2,3,4]]);
    }); 

    test("combinationSum3 2", () => {
        expect(combinationSum3(4,1)).toEqual([]);
    }); 
});

