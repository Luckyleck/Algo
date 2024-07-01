/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;

    const getDepth = (node) => {
        if (!node) return 0;

        const queue = [[node, 1]]; // [node, depth]
        let maxDepth = 0;

        while (queue.length) {
            const [currentNode, depth] = queue.shift();
            if (!currentNode) continue;
            maxDepth = Math.max(maxDepth, depth);
            if (currentNode.left) queue.push([currentNode.left, depth + 1]);
            if (currentNode.right) queue.push([currentNode.right, depth + 1]);
        }

        return maxDepth;
    };

    const queue = [root];

    while (queue.length) {
        const currentNode = queue.shift();
        if (!currentNode) continue;

        const leftDepth = getDepth(currentNode.left);
        const rightDepth = getDepth(currentNode.right);

        if (Math.abs(leftDepth - rightDepth) > 1) {
            return false;
        }

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }

    return true;
};