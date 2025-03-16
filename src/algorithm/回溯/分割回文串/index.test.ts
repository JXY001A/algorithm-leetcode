import { partition } from "./index";

describe("分割回文串",()=>{
    test("partition 1", () => {
        expect(partition("aab")).toEqual([["a","a","b"],["aa","b"]]);
    }); 

    test("分割回文串 2", () => {
        expect(partition("a")).toEqual([["a"]]);
    }); 
});

