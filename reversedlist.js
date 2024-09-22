(function () {
  // Definition for singly-linked list node.
  function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }

  // Function to reverse a linked list
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
      next = current.next; // Save the next node
      current.next = prev; // Reverse the current node's pointer
      prev = current; // Move prev to current
      current = next; // Move to the next node
    }

    // Return the new head (prev)
    return prev;
  }

  // Function to create a linked list from an array
  function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }

    return head;
  }

  // Function to convert a linked list back to an array (for easy output comparison)
  function linkedListToArray(head) {
    const result = [];
    let current = head;

    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }

    return result;
  }

  // Test the function with the example inputs
  const input1 = createLinkedList([1, 2, 3, 4, 5]);
  const reversed1 = reverseLinkedList(input1);
  console.log("Reversed List 1:", linkedListToArray(reversed1));

  const input2 = createLinkedList([1, 2]);
  const reversed2 = reverseLinkedList(input2);
  console.log("Reversed List 2:", linkedListToArray(reversed2));

  const input3 = createLinkedList([]);
  const reversed3 = reverseLinkedList(input3);
  console.log("Reversed List 3:", linkedListToArray(reversed3));
})();
