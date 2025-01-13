// TODO: 总结：
// 首先单调栈的作用是高效寻找一个数组中左侧或者右侧第一个最大值或最小值
// 原理是在循环过程中，不断使用栈记录当前的元素，只有当遇到没一个比当前栈顶元素大的
// 数值的时候将该元素出栈，继续循环直到栈中没有比它小的元素，然后再这个元素放入栈中，如此往复循环
// 就可以将每个元素右侧第一个大于它的索引找到

export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    // 当栈不为空且当前温度大于栈顶温度时，更新结果
    while (
      stack.length > 0 && 
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!;
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return result;
}