# My Understanding of Stacks
An implementation for understanding Stacks using javascript.

## Stacks
A Stack is a one-ended linear data structure which models a real world stack. It has two opearations push and pop. It follows The LIFO operation.

**Where are Stacks used?**
Stacks are used to make functionalities like undo, redo. They can be used to manage recursive function calls and return addresses. It can help in backtracking algorithms. It can be used to implement Depth First Search on a graph.

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