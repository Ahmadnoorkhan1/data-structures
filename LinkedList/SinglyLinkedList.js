// Helper function to create a new node
function createNode(data) {
    return {
        data: data,
        next: null
    };
}

// Singly Linked List Implementation
const SinglyLinkedList = {
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
            this.tail = newNode;
        }
        this.size++;
    },

    // Insert a new node at a specific index
    insertAt(data, index) {
        if (index < 0 || index > this.size) return;  // Invalid index
        const newNode = createNode(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (this.size === 0) { // If it's the first node, set tail as well
                this.tail = newNode;
            }
        } else {
            let current = this.head;
            let previous;
            let currentIndex = 0;

            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            previous.next = newNode;
            newNode.next = current;

            if (newNode.next === null) { // If the new node is inserted at the end, update tail
                this.tail = newNode;
            }
        }
        this.size++;
    },

    // Remove a node from a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) return new Error('Invalid Index');  // Invalid index
        let current = this.head;
        let previous;

        if (index === 0) {
            this.head = current.next;
        } else {
            let currentIndex = 0;
            while (currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }

            previous.next = current.next;

            if (current === this.tail) {
                this.tail = previous;
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

    // Print all elements in the list
    print() {
        let current = this.head;
        let list = [];

        while (current) {
            list.push(current.data);
            current = current.next;
        }

        console.log(list.join(" -> "));
    }
};

// Example usage:
const LinkedList = SinglyLinkedList;

console.log("****************************************************************")
console.log("APPEND")
console.log("****************************************************************")
console.log(" Initially the linked list is : " + JSON.stringify(LinkedList));
LinkedList.append(10)
console.log('Linked list is after the first append ' + JSON.stringify(LinkedList));
console.log("****************************************************************")
console.log("END")
console.log("****************************************************************")





console.log("****************************************************************")
console.log("INSERTAT")
console.log("****************************************************************")
console.log(" Initially the linked list is : " + JSON.stringify(LinkedList));
LinkedList.insertAt(20, 1)
console.log('Linked list is after the first insert ' + JSON.stringify(LinkedList));
console.log("****************************************************************")
console.log("END")
console.log("****************************************************************")


console.log("****************************************************************")
console.log("REMOVEAT")
console.log("****************************************************************")
console.log(" Initially the linked list is : " + JSON.stringify(LinkedList));
LinkedList.removeAt(1)
console.log('Linked list is after the first remove ' + JSON.stringify(LinkedList));
console.log("****************************************************************")
console.log("END")
console.log("****************************************************************")

LinkedList.insertAt(20,1);
LinkedList.insertAt(30,2);

console.log("****************************************************************")
console.log("GET")
console.log("****************************************************************")
console.log(" Initially the linked list is : " + JSON.stringify(LinkedList));
const getNode = LinkedList.get(2)
console.log('Linked list is after the first get ' + JSON.stringify(getNode));
console.log("****************************************************************")
console.log("END")
console.log("****************************************************************")


console.log("****************************************************************")
console.log("PRINT")
console.log("****************************************************************")
LinkedList.print();
console.log("****************************************************************")
console.log("END")
console.log("****************************************************************")