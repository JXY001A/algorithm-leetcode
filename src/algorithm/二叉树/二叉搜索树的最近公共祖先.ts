/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */



interface TreeNode {
  val:number;
  left?:TreeNode;
  right?:TreeNode;
};

function lowestCommonAncestor(root?: TreeNode | null, p?: TreeNode | null, q?: TreeNode | null): TreeNode | null {
	if(!root) return null;

    if(root.val > p.val && root.val > q.val) {
        const left =  lowestCommonAncestor(root.left,p,q);
        if(left) return left;

    }
    if(root.val < p.val && root.val < q.val) {
        const right = lowestCommonAncestor(root.right,p,q);
        if(right) return right;
    }

    return root;
};