import { fourSum } from "./index";

describe("四数之和",()=>{
    test("fourSum 1", () => {
        expect(fourSum([1,0,-1,0,-2,2],0)).toEqual([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]);
    }); 

    test("fourSum 2", () => {
        expect(fourSum([2,2,2,2,2],8)).toEqual([[2,2,2,2]]);
    }); 

    test("fourSum 3", () => {
        expect(fourSum([-3,-2,-1,0,0,1,2,3],0)).toEqual([[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]);
    }); 
});
