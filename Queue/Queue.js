const UnderstandingQueue = () => {
    // Initialize a queue (using an array)
    const Queue = () => {
        const items = [];
    
        return {
            // Enqueue: Add an element to the end of the queue - O(1)
            enqueue(element) {
                items.push(element);
                console.log(`Enqueued ${element}:`, items);
            },
    
            // Dequeue: Remove the front element from the queue - O(1)
            dequeue() {
                if (this.isEmpty()) {
                    console.log("Queue is empty, nothing to dequeue.");
                    return null;
                }
                const removedElement = items.shift();
                console.log(`Dequeued ${removedElement}:`, items);
                return removedElement;
            },
    
            // Peek: Get the front element of the queue without removing it - O(1)
            peek() {
                if (this.isEmpty()) {
                    console.log("Queue is empty, nothing to peek.");
                    return null;
                }
                console.log(`Front element is: ${items[0]}`);
                return items[0];
            },
    
            // isEmpty: Check if the queue is empty - O(1)
            isEmpty() {
                return items.length === 0;
            },
    
            // Size: Get the current size of the queue - O(1)
            size() {
                console.log(`Queue size is: ${items.length}`);
                return items.length;
            },
    
            // Clear: Empty the queue
            clear() {
                items.length = 0;
                console.log("Cleared the queue:", items);
            }
        };
    };
    
    // Example usage of the Queue
    const queue = Queue();
    
    queue.enqueue(1); // Enqueued 1
    queue.enqueue(2); // Enqueued 2
    queue.enqueue(3); // Enqueued 3
    
    queue.dequeue();   // Dequeues 1
    queue.peek();      // Peeks at the front element (2)
    queue.size();      // Shows current size (2)
    
    queue.enqueue(4);  // Enqueued 4
    queue.enqueue(5);  // Enqueued 5
    
    queue.dequeue();   // Dequeues 2
    queue.size();      // Shows current size (3)
    
    queue.clear();     // Clears the queue
    console.log("Is the queue empty?", queue.isEmpty()); // Checks if queue is empty (true)
    
};

UnderstandingQueue();
