
type TreeNode = {
    val:number;
    left: TreeNode | null;
    right: TreeNode | null;
};

export function findMode(root: TreeNode | null): number[] {
    let result:number[] = [];
    let prevVal;
    let maxModeCount=0;
    let currentModeCount=0;
    const findModeRecursive = (node:TreeNode|null)=>{
        if(!node) return ;
        findModeRecursive(node.left);

        if(prevVal !== node.val) {
            currentModeCount=1;
        }else if(prevVal === node.val) {
            currentModeCount+=1;
        }else {
            currentModeCount=1;
        }

        if(maxModeCount<currentModeCount) {
            result = [node.val];
            maxModeCount = currentModeCount; 
        }else if(maxModeCount===currentModeCount) {
            result.push(node.val);
        }
        
        prevVal = node.val;
        findModeRecursive(node.right);
    }

    findModeRecursive(root);
    return result;
};