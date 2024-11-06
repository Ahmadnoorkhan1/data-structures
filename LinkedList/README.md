# My Understanding of Linked Lists
An implementation for understanding Linked Lists using javascript.

## Linked Lists
A linked list is a sequenctial list of nodes that holds data which points to other nodes also containing data.

**Where are Linked Lists used?**
Linked lists are used to implement lists, queues, stacks. They are great to use in circular lists. They can easily model the real world objects. They are used in seperate chaining, which is present in certain hashtable implementations to deal with hashing collisions. Often used in the implementation of adjaceny lists for graphs.

### Terminologies in Linked Lists

**Head**: The first node in the linked list.<br>
**Tail**: The last node in the linked list.<br>
**Pointer**: The reference to the node.<br>
**Node**: The object containing data and pointers.

![Local Image](../assets/LinkedList.png)


## Singly Linked List
A singly linked list is a linear data structure where each node points to the next node in the list.

Each node has two parts:
- **Data**: Stores the actual data of the node.
- **Next**: A reference or pointer to the next node in the list.

**Traversal**: You can only traverse the list in one direction, from the head (first node) to the last node.

### Memory:
Singly linked lists use **less memory** because each node only needs to store one reference (to the next node).

### Insertion and Deletion:
Insertion and deletion operations can be performed efficiently, especially at the beginning of the list.

---

## Doubly Linked List
A doubly linked list is a more complex version of a linked list where each node contains three parts:
- **Data**: Stores the actual data of the node.
- **Next**: A reference or pointer to the next node in the list.
- **Prev**: A reference or pointer to the previous node in the list.

**Traversal**: You can traverse the list in both directions: from the head to the tail and from the tail to the head.

### Memory:
Doubly linked lists use **more memory** because each node needs two pointers (one to the next node and one to the previous node).

### Insertion and Deletion:
Insertion and deletion operations can be more efficient than singly linked lists, especially when removing a node from the middle of the list, as you can directly access the previous node.



| Data Structure        | Pros                     | Cons                       |
|-----------------------|--------------------------|----------------------------|
| **Singly Linked Lists**| Uses less memory. Simpler implementation | Cannot easily access previous values. |
| **Doubly Linked Lists**| Can be traversed in both directions | Uses more memory.          |
