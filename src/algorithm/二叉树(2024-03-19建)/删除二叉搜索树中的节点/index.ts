type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if(!root) return null;

    if(root.val === key) {
        if(root.left && !root.right) {
            return root.left;
        }else if(root.right && !root.left) {
            return root.right;
        }else if(root.left && root.right) {
            let tempNode = root.right;
            while(tempNode.left) {
                tempNode = tempNode.left;
            }
            tempNode.left = root.left;
            return root.right;
        }else {
            return null;
        }
    }
    if(root.val > key) {
        root.left = deleteNode(root.left,key);
    }else {
        root.right = deleteNode(root.right,key);
    }

    return root;
};