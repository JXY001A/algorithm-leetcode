import { subsets } from "./index";

describe("子集",()=>{
    test("subsets 1", () => {
        expect(subsets([1,2,3])).toEqual([[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]);
    }); 

    test("subsets 2", () => {
        expect(subsets([0])).toEqual([[],[0]]);
    });
});
