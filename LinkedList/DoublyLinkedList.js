// Helper function to create a new node
function createNode(data) {
    return {
        data: data,
        next: null,
        prev: null // In doubly linked list, we also have a reference to the previous node
    };
}

// Doubly Linked List Implementation
const DoublyLinkedList = {
    head: null,
    tail: null,
    size: 0,

    // Add a new node to the end of the list
    append(data) {
        const newNode = createNode(data);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    },

    // Insert a new node at a specific index
    insertAt(data, index) {
        if (index < 0 || index > this.size) return; // Invalid index
        const newNode = createNode(data);

        if (index === 0) {
            // Inserting at the head
            newNode.next = this.head;
            if (this.head) this.head.prev = newNode;
            this.head = newNode;
            if (this.size === 0) { // If it's the first node, set tail as well
                this.tail = newNode;
            }
        } else if (index === this.size) {
            // Inserting at the end (tail)
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            // Inserting in the middle
            let current = this.head;
            let currentIndex = 0;

            while (currentIndex < index) {
                current = current.next;
                currentIndex++;
            }

            newNode.next = current;
            newNode.prev = current.prev;
            current.prev.next = newNode;
            current.prev = newNode;
        }
        this.size++;
    },

    // Remove a node from a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) return new Error('Invalid Index');  // Invalid index
        let current = this.head;

        if (index === 0) {
            this.head = current.next;
            if (this.head) this.head.prev = null;
        } else {
            let currentIndex = 0;
            while (currentIndex < index) {
                current = current.next;
                currentIndex++;
            }

            current.prev.next = current.next;
            if (current.next) current.next.prev = current.prev;

            if (current === this.tail) {
                this.tail = current.prev;
            }
        }
        this.size--;
    },

    // Get the node at a specific index
    get(index) {
        if (index < 0 || index >= this.size) return null;  // Invalid index
        let current = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        return current;
    },

    // Get the index of a node containing the given data
    indexOf(data) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;  // Data not found
    },

    // Remove the first node that matches the given data
    remove(data) {
        const index = this.indexOf(data);
        if (index !== -1) {
            this.removeAt(index);
        }
    },

    // Print all elements in the list (Forward Traversal)
    print() {
        let current = this.head;
        let list = [];

        while (current) {
            list.push(current.data);
            current = current.next;
        }

        console.log(list.join(" <-> "));
    },

    // Print all elements in the list (Backward Traversal)
    reversePrint() {
        let current = this.tail;
        let list = [];

        while (current) {
            list.push(current.data);
            current = current.prev;
        }

        console.log(list.join(" <-> "));
    }
};

// Example usage:
const LinkedList = DoublyLinkedList;

console.log("****************************************************************");
console.log("APPEND");
console.log("****************************************************************");
console.log(" Initially the linked list is : ");
LinkedList.print();
LinkedList.append(10);
console.log("Linked list after the first append:");
LinkedList.print();
console.log("****************************************************************");
console.log("END");
console.log("****************************************************************");

console.log("****************************************************************");
console.log("INSERTAT");
console.log("****************************************************************");
console.log(" Initially the linked list is : ");
LinkedList.print();
LinkedList.insertAt(20, 1);
console.log("Linked list after the first insert:");
LinkedList.print();
console.log("****************************************************************");
console.log("END");
console.log("****************************************************************");


// Example usage:
console.log("****************************************************************");
console.log("REMOVEAT");
console.log("****************************************************************");
console.log(" Initially the linked list is : ");
LinkedList.print();
LinkedList.removeAt(1);
console.log("Linked list after the first remove:");
LinkedList.print();
console.log("****************************************************************");
console.log("END");
console.log("****************************************************************");

LinkedList.insertAt(20, 1);
LinkedList.insertAt(30, 2);

console.log("****************************************************************");
console.log("GET");
console.log("****************************************************************");
console.log(" Initially the linked list is : ");
LinkedList.print();
const getNode = LinkedList.get(2);
console.log('Node at index 2:', getNode ? getNode.data : 'null');
console.log("****************************************************************");
console.log("END");
console.log("****************************************************************");

