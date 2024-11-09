# My Understanding of Queue
An implementation for understanding Queues using JavaScript.

## Queue
A queue is a linear data structure that models real-world queues by having two primary operations:
- **Enqueue**: Add an element to the end of the queue.
- **Dequeue**: Remove an element from the front of the queue.

**Where are Queues Used?**
Queues are used in systems that require tasks to be handled in the order they arrive, such as in server request management, task scheduling, and breadth-first search (BFS) on graphs. They are essential for any situation that requires a "first-come, first-served" approach.

---

## Types of Queues

### 1. Simple Queue (or Linear Queue)
- **Description**: The basic form of a queue where elements are added at the rear and removed from the front (FIFO).
- **Usage**: Suitable for simple task processing, job scheduling, and managing tasks in real-time applications.
- **Limitations**: Can lead to "false overflow" where, after repeated enqueues and dequeues, the queue appears full even if there’s available space at the front.

```javascript
class SimpleQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(element) {
        this.queue.push(element);
    }
    dequeue() {
        return this.queue.shift();
    }
}
```

### 2. Circular Queue
- **Description**: A queue where the last position connects back to the first, forming a circle. When the end of the queue is reached, new elements wrap around to fill freed spaces at the front.
- **Usage**: Useful for fixed-size buffers, like in streaming data, CPU scheduling, and real-time traffic management.
- **Benefits**: Maximizes storage efficiency and avoids "false overflow."

```javascript
class CircularQueue {
    constructor(size) {
        this.queue = new Array(size).fill(null);
        this.front = this.rear = -1;
        this.size = size;
    }
    enqueue(element) {
        if ((this.rear + 1) % this.size === this.front) {
            throw new Error("Queue is full");
        }
        if (this.front === -1) this.front = 0;
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = element;
    }
    dequeue() {
        if (this.front === -1) throw new Error("Queue is empty");
        const removedElement = this.queue[this.front];
        this.queue[this.front] = null;
        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return removedElement;
    }
}
```

### 3. Priority Queue
- **Description**: A queue where each element has a priority level, and elements are dequeued based on priority rather than just order of arrival. Elements with the same priority are handled in FIFO order.
- **Usage**: Essential in systems where tasks have different priorities, such as in operating systems, network routers, and real-time applications.

```javascript
class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(element, priority) {
        const queueElement = { element, priority };
        if (this.isEmpty()) {
            this.queue.push(queueElement);
        } else {
            let added = false;
            for (let i = 0; i < this.queue.length; i++) {
                if (queueElement.priority < this.queue[i].priority) {
                    this.queue.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) this.queue.push(queueElement);
        }
    }
    dequeue() {
        return this.queue.shift().element;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
}
```

### 4. Double-Ended Queue (Deque)
- **Description**: A flexible queue allowing elements to be added or removed from both the front and the rear. It can act as both a stack and a queue.
- **Usage**: Common in scenarios needing more flexibility, such as handling undo operations, or implementing both FIFO and LIFO behaviors.
- **Variants**:
   - **Input-Restricted Deque**: Allows insertion at one end but removal from both ends.
   - **Output-Restricted Deque**: Allows removal at one end but insertion at both ends.

```javascript
class Deque {
    constructor() {
        this.queue = [];
    }
    enqueueFront(element) {
        this.queue.unshift(element);
    }
    enqueueRear(element) {
        this.queue.push(element);
    }
    dequeueFront() {
        return this.queue.shift();
    }
    dequeueRear() {
        return this.queue.pop();
    }
}
```

---

## Complexity Summary
| Functions         | Simple Queue | Circular Queue | Priority Queue | Deque |
|-------------------|--------------|----------------|----------------|-------|
| **Enqueue**       | O(1)         | O(1)           | O(n)          | O(1)  |
| **Dequeue**       | O(1)         | O(1)           | O(1)          | O(1)  |
| **Peeking**       | O(1)         | O(1)           | O(1)          | O(1)  |
| **Contains**      | O(n)         | O(n)           | O(n)          | O(n)  |
| **Removal**       | O(n)         | O(n)           | O(n)          | O(1)  |
| **Is Empty**      | O(1)         | O(1)           | O(1)          | O(1)  |

---

## Conclusion
In summary, each type of queue serves a different purpose:
- **Simple Queue**: Best for straightforward, sequential task processing.
- **Circular Queue**: Ideal for fixed-size buffers where efficient memory usage is key.
- **Priority Queue**: Vital when tasks have different levels of importance.
- **Deque**: Perfect for scenarios requiring both stack and queue behaviors.

Understanding these types of queues and their complexities enables developers to select the most efficient queue type for specific tasks, leading to optimal performance in applications such as scheduling, resource management, and algorithm implementations.