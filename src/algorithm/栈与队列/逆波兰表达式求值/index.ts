enum Operator {
    Add='+',
    Subtract='-',
    Multiply='*',
    Divide='/',
};
export function evalRPN(tokens: string[]): number {
    let result = 0;
    if(tokens.length===0) return result; 
    const stack:number[] = [];
    for(let i=0;i<tokens.length;i+=1) {
        const curToken = tokens[i];
        if(isNaN(Number(curToken))) {
            const operatorRightVal = stack.pop()!;
            const operatorLeftVal = stack.pop()!;
            if(curToken === Operator.Add) {
                result = operatorLeftVal + operatorRightVal;
            }else if(curToken === Operator.Subtract) {
                result = operatorLeftVal - operatorRightVal;
            }else if(curToken === Operator.Multiply) {
                result = operatorLeftVal * operatorRightVal;
            }else {
                result = Number(parseInt(`${operatorLeftVal / operatorRightVal}`));
            }
            stack.push(result)
        }else {
            result = Number(curToken);
            stack.push(result);
        }
    }
    return result;
};