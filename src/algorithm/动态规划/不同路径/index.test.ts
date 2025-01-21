import { uniquePaths,uniquePathsOptimize }  from './index';

describe('uniquePaths', () => {
  test("不同路径1", () => {
    expect(uniquePaths(3,7)).toBe(28);
  });

  test("不同路径2", () => {
    expect(uniquePaths(3,2)).toBe(3);
  });

  test("不同路径3", () => {
    expect(uniquePaths(3,3)).toBe(6);
  });
  
});

describe('uniquePathsOptimize', () => {
  test("不同路径1", () => {
    expect(uniquePathsOptimize(3,7)).toBe(28);
  });

  test("不同路径2", () => {
    expect(uniquePathsOptimize(3,2)).toBe(3);
  });

  test("不同路径3", () => {
    expect(uniquePathsOptimize(3,3)).toBe(6);
  });
  
});
