# My Understanding of Queue
An implementation for understanding Queues using javascript.

## Queue
A queue is a linear data structure which models real world queues by having two primary operations
- Enqueue
- Dequeue

**Where are Queue used?**
Queues are used in waiting line like mdoels. They are used in web server requests management where you want first come first serve. It can be implemented with breadth first search on graph.

## Complexity
| Functions        | Complexity                     |
|-----------------------|--------------------------|
| **Pushing**| O(1) |
| **Popping**| O(1) |
| **Peeking**| O(1) |
| **Searching**| O(n) |
| **Size**| O(1) |


## Conclusion
Stacks are a fundamental data structure with simple yet powerful operations, making them suitable for many applications such as managing function calls, backtracking, and undo/redo functionalities. Their Last In, First Out (LIFO) behavior ensures that only the most recent element is accessible, which simplifies certain operations and guarantees O(1) time complexity for pushing, popping, and peeking. However, searching within a stack remains an O(n) operation, making it best suited for tasks where the order and recency of data are key factors. Understanding stacks and their complexities aids in efficiently managing data flow in various programming contexts.