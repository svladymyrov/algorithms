/**
 * 876. Middle of the Linked List
 * Easy

Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]

Constraints:
  - The number of nodes in the list is in the range [1, 100].
  - 1 <= Node.val <= 100
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function middleNode(head: ListNode | null): ListNode | null {
  if (!head?.next) return head;
  let currentNode: ListNode | null = head;
  const nodes = [];

  while (currentNode !== null) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }

  return nodes.length % 2 === 0
    ? nodes[nodes.length / 2]
    : nodes[(nodes.length - 1) / 2];
}

// https://leetcode.com/problems/middle-of-the-linked-list/solutions/1651600/python-java-c-simple-solution-one-pass-beginner-friendly-detailed-explanation/
export function middleNodeWithPointers(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}
