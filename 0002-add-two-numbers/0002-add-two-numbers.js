/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let currentNode = l1;
    let l1Nums = []
    let l2Nums = []

    while (true) {
        if (currentNode.next) {
            l1Nums.unshift(currentNode.val)
            currentNode = currentNode.next;
        } else {
            l1Nums.unshift(currentNode.val)
            break;
        }
    }

    currentNode = l2;

    while (true) {
        if (currentNode.next) {
            l2Nums.unshift(currentNode.val)
            currentNode = currentNode.next;
        } else {
            l2Nums.unshift(currentNode.val)
            break;
        }
    }

    let sum = BigInt(l1Nums.join("")) + BigInt(l2Nums.join(""));
    let stringSum = sum.toString();
    let sumNums = stringSum.split("").map(num => Number(num)).reverse();

    const dummyHead = new ListNode();
    let current = dummyHead;

    for (const num of sumNums) {
        current.next = new ListNode(num);
        current = current.next;
        // console.log(dummyHead.next)
    }

    return dummyHead.next;

};