/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const buildBST = function(left, right) {
        if (left > right) {
            return null;
        }
        
        const mid = Math.floor((left + right) / 2);
        const rootNode = new TreeNode(nums[mid]);
        
        rootNode.left = buildBST(left, mid - 1);
        rootNode.right = buildBST(mid + 1, right);
        
        return rootNode;
    }
    
    return buildBST(0, nums.length - 1);
};