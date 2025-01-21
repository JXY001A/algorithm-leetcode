import { uniquePathsWithObstacles,uniquePathsWithObstaclesOptimize } from './index';

describe('uniquePathsWithObstacles', () => {
  test("不同路径1", () => {
    expect(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])).toBe(2);
  });

  test("不同路径2", () => {
    expect(uniquePathsWithObstacles([[0,1],[0,0]])).toBe(1);
  });
  
});


describe('uniquePathsWithObstaclesOptimize', () => {
  test("不同路径1", () => {
    expect(uniquePathsWithObstaclesOptimize([[0,0,0],[0,1,0],[0,0,0]])).toBe(2);
  });

  test("不同路径2", () => {
    expect(uniquePathsWithObstaclesOptimize([[0,1],[0,0]])).toBe(1);
  });

  test("不同路径3", () => {
    expect(uniquePathsWithObstaclesOptimize([[0,0]])).toBe(1);
  });
  
});