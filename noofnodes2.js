// Node class to create new nodes in the linked list
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Function to delete duplicates
var deleteDuplicates = function (head) {
  let current = head;

  // Traverse through the list until the end
  while (current && current.next) {
    // If the current value is the same as the next value, skip the next node
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next; // Move to the next node if values are different
    }
  }

  return head; // Return the head of the modified list
};

// Example usage:
// Creating the linked list [1, 1, 2, 3, 3]
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

// Deleting duplicates
let result = deleteDuplicates(head);

// Function to print the linked list
function printList(head) {
  let current = head;
  let output = [];
  while (current) {
    output.push(current.val);
    current = current.next;
  }
  console.log(output);
}

// Printing the result
printList(result); // Output: [1, 2, 3]
