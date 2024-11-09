const UnderstandingCircularQueue = () => {
    const CircularQueue = (size) => {
        const items = new Array(size).fill(null);
        let front = -1;
        let rear = -1;

        return {
            // Enqueue: Add an element to the end of the queue
            enqueue(element) {
                if ((rear + 1) % size === front) {
                    console.log("Queue is full, cannot enqueue.");
                    return;
                }
                if (front === -1) front = 0;
                rear = (rear + 1) % size;
                items[rear] = element;
                console.log(`Enqueued ${element}:`, items);
            },

            // Dequeue: Remove the front element from the queue
            dequeue() {
                if (this.isEmpty()) {
                    console.log("Queue is empty, nothing to dequeue.");
                    return null;
                }
                const removedElement = items[front];
                items[front] = null; // Clear the slot for visualization
                if (front === rear) {
                    front = rear = -1; // Reset queue if last element was dequeued
                } else {
                    front = (front + 1) % size;
                }
                console.log(`Dequeued ${removedElement}:`, items);
                return removedElement;
            },

            // Peek: Get the front element without removing it
            peek() {
                if (this.isEmpty()) {
                    console.log("Queue is empty, nothing to peek.");
                    return null;
                }
                console.log(`Front element is: ${items[front]}`);
                return items[front];
            },

            // isEmpty: Check if the queue is empty
            isEmpty() {
                return front === -1;
            },

            // isFull: Check if the queue is full
            isFull() {
                return (rear + 1) % size === front;
            },

            // Size: Get the current number of elements in the queue
            size() {
                if (this.isEmpty()) return 0;
                if (rear >= front) return rear - front + 1;
                return size - front + rear + 1;
            },

            // Clear: Empty the queue
            clear() {
                front = rear = -1;
                items.fill(null);
                console.log("Cleared the queue:", items);
            }
        };
    };

    // Example usage of the CircularQueue
    const queue = CircularQueue(5);

    queue.enqueue(1); // Enqueued 1
    queue.enqueue(2); // Enqueued 2
    queue.enqueue(3); // Enqueued 3
    queue.enqueue(4); // Enqueued 4
    queue.enqueue(5); // Queue is full, cannot enqueue

    queue.dequeue();   // Dequeues 1
    queue.peek();      // Peeks at the front element (2)
    console.log("Current size:", queue.size()); // Shows current size

    queue.enqueue(6);  // Enqueued 6 (wraps around)
    queue.dequeue();   // Dequeues 2
    queue.size();      // Shows current size

    queue.clear();     // Clears the queue
    console.log("Is the queue empty?", queue.isEmpty()); // Checks if queue is empty (true)
};

UnderstandingCircularQueue();
