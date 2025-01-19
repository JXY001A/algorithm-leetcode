export function fibRecursion(n: number): number {
  if(n===0) return 0;
  if(n===1) return 1;
  return fibRecursion(n-1) + fibRecursion(n-2);
};