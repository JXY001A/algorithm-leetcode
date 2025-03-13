import { letterCombinations } from "./index";

describe("电话号码的字母组合",()=>{
    test("letterCombinations 1", () => {
        expect(letterCombinations("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
    }); 

    test("letterCombinations 2", () => {
        expect(letterCombinations("")).toEqual([]);
    }); 

    test("letterCombinations 3", () => {
        expect(letterCombinations("2")).toEqual(["a","b","c"]);
    }); 
});

