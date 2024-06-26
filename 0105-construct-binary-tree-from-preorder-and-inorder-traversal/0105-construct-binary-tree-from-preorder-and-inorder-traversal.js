/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;

    const rootValue = preorder[0];
    const root = new TreeNode(rootValue);

    const mid = inorder.indexOf(rootValue);

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0,mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

    return root
};