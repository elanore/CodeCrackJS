// Definition for a singly-linked list node.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Function to add two numbers represented by linked lists
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0); // Initialize dummy head for the result list
  let current = dummyHead;
  let carry = 0;

  // Traverse through both linked lists
  while (l1 !== null || l2 !== null) {
    // Get values from the current nodes of both lists (or 0 if null)
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;

    // Calculate sum of both values and carry
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // Update carry for next addition

    // Create a new node for the current digit in the result list
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move to the next nodes in the lists, if available
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  // If there's a remaining carry, add a new node with the carry value
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next; // Return the result list starting from the next node of dummy head
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print linked list as an array
function printLinkedList(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result);
}

// Example usage:
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
printLinkedList(result); // Output: [7, 0, 8]
