const UnderstandingStacks = () => {
    // Initialize a stack (using an array)
    let stack = [];

    console.log("Here we have created an empty stack:", stack);

    // 1. Pushing elements onto the stack - O(1)
    stack.push(1); // stack: [1]
    stack.push(2); // stack: [1, 2]
    stack.push(3); // stack: [1, 2, 3]
    console.log("After pushing elements 1, 2, and 3 onto the stack:", stack);

    // 2. Popping the top element from the stack - O(1)
    let poppedElement = stack.pop(); // removes 3, stack is now [1, 2]
    console.log("After popping the top element:", poppedElement, ", Stack now:", stack);

    // 3. Peeking at the top element (checking the last element without removing) - O(1)
    let topElement = stack[stack.length - 1]; // 2
    console.log("Peeking at the top element:", topElement, ", Stack remains:", stack);

    // 4. Checking if the stack is empty
    let isEmpty = stack.length === 0;
    console.log("Is the stack empty?", isEmpty);

    // 5. Pushing and popping multiple elements
    stack.push(4); // stack: [1, 2, 4]
    stack.push(5); // stack: [1, 2, 4, 5]
    console.log("After pushing elements 4 and 5:", stack);

    poppedElement = stack.pop(); // removes 5, stack is now [1, 2, 4]
    console.log("After popping the top element:", poppedElement, ", Stack now:", stack);

    // 6. Checking the stack size - O(1)
    let stackSize = stack.length;
    console.log("Current stack size:", stackSize);

    // 7. Clearing the stack
    stack = []; // Emptying the stack
    console.log("After clearing the stack:", stack);

    // 8. Checking if the stack is empty after clearing
    isEmpty = stack.length === 0;
    console.log("Is the stack empty after clearing?", isEmpty);
};

UnderstandingStacks();
