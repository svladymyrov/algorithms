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

const head1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
// const head2 = new ListNode(
//   1,
//   new ListNode(
//     2,
//     new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))),
//   ),
// );

// [1,2,3,4,5,6,7  ,8,9  ,10]

export function middleNode(head: ListNode | null): ListNode | null {
  if (!head?.next) return head;
  let currentNode = head;
  const nodes = [];
  while (currentNode) {
    nodes.push(head);
    currentNode = head.next;
  }
  return nodes.length % 2 === 0
    ? nodes[nodes.length / 2]
    : nodes[(nodes.length - 1) / 2];
}

console.log(middleNode(head1));
