// // Definition for singly-linked list node.
// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// function mergeTwoLists(list1, list2) {
//   // Create a dummy node to simplify edge cases
//   let dummy = new ListNode();
//   let current = dummy;

//   // Traverse both lists while there are elements in both
//   while (list1 !== null && list2 !== null) {
//     if (list1.val <= list2.val) {
//       current.next = list1;
//       list1 = list1.next;
//     } else {
//       current.next = list2;
//       list2 = list2.next;
//     }
//     current = current.next;
//   }

//   // Attach the remaining nodes from either list
//   if (list1 !== null) {
//     current.next = list1;
//   } else {
//     current.next = list2;
//   }

//   // Return the merged list (skipping the dummy node)
//   return dummy.next;
// }

// // Helper function to create a linked list from an array
// function createLinkedList(arr) {
//   let dummy = new ListNode();
//   let current = dummy;
//   for (let num of arr) {
//     current.next = new ListNode(num);
//     current = current.next;
//   }
//   return dummy.next;
// }

// // Helper function to print the linked list as an array
// function printLinkedList(head) {
//   let result = [];
//   while (head !== null) {
//     result.push(head.val);
//     head = head.next;
//   }
//   return result;
// }

// // Example usage:
// let list1 = createLinkedList([1, 2, 4]);
// let list2 = createLinkedList([1, 3, 4]);

// let mergedList = mergeTwoLists(list1, list2);
// console.log(printLinkedList(mergedList), "merged");

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode(); // Dummy node
  let current = dummy;

  // Compare and merge nodes
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next; // Move to next in merged list
  }

  // Attach remaining nodes
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next; // Return merged list
}
