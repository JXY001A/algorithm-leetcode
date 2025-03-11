// const sum = (nums:number[])=>{
//     return nums?.reduce((acc,next)=>{
//         return acc + next;
//     },0);
// }

export function combinationSum3(k: number, n: number): number[][] {
  const result: number[][] = [];

  // 遍历 1 - 9 的数字
  // 做多使用一次也就是每个组合中数字不允许重复
  // k 个数字 且 和 等于 n :
  /** 
        if(path.length === k) { 
            if(sum(path) === n) {
                result.push([...path]);
            }
            return ;
        }
    */

  const _combine = (
    start: number,
    end: number,
    path: number[],
    sum: number
  ) => {
    if (path.length === k) {
      if (sum === n) {
        result.push([...path]);
        return;
      }
    }
    for (let i = start; i <= 9 - (k - path.length) + 1 && sum < n; i += 1) {
      path.push(i);
      _combine(i + 1, end, path, sum + i);
      path.pop();
    }
  };

  _combine(1, 9, [], 0);

  return result;
}
