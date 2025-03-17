import { subsetsWithDup } from "./index";

describe("子集II",()=>{
    test("subsetsWithDup 1", () => {
        expect(subsetsWithDup([1,2,2])).toEqual([[],[1],[1,2],[1,2,2],[2],[2,2]]);
    }); 

    test("subsetsWithDup 2", () => {
        expect(subsetsWithDup([0])).toEqual([[],[0]]);
    });
});
