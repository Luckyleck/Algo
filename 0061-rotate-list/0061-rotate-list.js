/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === 0) {
        return head;
    }

    let length = 0;
    let current = head;
    
    while (current) {
        length++;
        current = current.next;
    }

    k = k % length; 

    if (k === 0) {
        return head; 
    }

    let slow = head;
    let fast = head;

    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    let newHead = slow.next;
    slow.next = null;
    fast.next = head;

    return newHead;
};