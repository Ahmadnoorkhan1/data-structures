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
| **Enqueue**| O(1) |
| **Dequeue**| O(1) |
| **Peeking**| O(1) |
| **Contains**| O(n) |
| **Removal**| O(n) |
| **Is Empty**| O(1) |


## Conclusion
In summary, the Queue data structure is essential for managing tasks or requests in the order they arrive, ensuring fair processing with minimal overhead. Its simplicity and efficiency make it ideal for systems requiring first-come, first-served handling, such as server request management, task scheduling, and graph traversal algorithms. By understanding its operations and complexities, developers can make informed decisions on when and where to apply queues effectively, particularly when tasks need to be processed in sequence without skipping or reordering.