
import { wordBreak } from "./index";

describe("单词拆分",()=>{
    test("wordBreak 1", () => {
        const s = "leetcode";
        const wordDict = ["leet", "code"];
        expect(wordBreak(s,wordDict)).toBe(true);
    }); 

    test("wordBreak 2", () => {
        const s = "applepenapple"; 
        const wordDict = ["apple", "pen"];
        expect(wordBreak(s,wordDict)).toBe(true);
    }); 

    test("wordBreak 2", () => {
        const s = "catsandog";
        const  wordDict = ["cats", "dog", "sand", "and", "cat"];
        expect(wordBreak(s,wordDict)).toBe(false);
    }); 
});

