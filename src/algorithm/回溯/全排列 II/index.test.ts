import { permuteUnique } from "./index";

describe("全排列 II",()=>{
    test("permuteUnique 1", () => {
        expect(permuteUnique([1,1,2])).toEqual([[1,1,2],[1,2,1],[2,1,1]]);
    }); 

    test("全排列 II 2", () => {
        expect(permuteUnique([1,2,3])).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
    }); 
});

