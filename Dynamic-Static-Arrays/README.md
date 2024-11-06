# Understanding Arrays
An implementation for understanding Arrays using javascript.

## Static Arrays

A **static array** is a fixed-length container that stores `n` elements. It is **indexable**, meaning each element can be accessed using an index within the range `[0, n-1]`. Static arrays occupy a contiguous block of memory.

### When and where are static arrays used?
- **Temporary data storage**: For quick, short-term storage of data.
- **Buffers**: To hold data temporarily before processing.
- **Lookup tables**: For fast data retrieval using indices.
- **Return values**: To store and return multiple values from a function.
- **Caching values**: For storing frequently used data.

### Complexity Table

| Operation   | Static Array | Dynamic Array |
|-------------|--------------|---------------|
| **Access**  | O(1)         | O(1)          |
| **Search**  | O(n)         | O(n)          |
| **Insertion**| N/A         | O(n)          |
| **Appending**| N/A         | O(1)          |
| **Deleting**| N/A         | O(n)          |

## Dynamic Arrays

A **dynamic array** can grow and shrink in size dynamically as elements are added or removed. This flexibility makes it more versatile compared to static arrays.

---

## Implementing Arrays and JavaScript Functions

In this section, I will be implementing arrays and discussing various JavaScript functions used with arrays. I will also cover their respective **Big O complexities** to understand how they perform in terms of time complexity. 

### JavaScript Array Methods
1. **`push()`**:  
   **Complexity**: O(1)  
   **Description**: Adding an element to the end of the array takes constant time.

2. **`pop()`**:  
   **Complexity**: O(1)  
   **Description**: Removing an element from the end of the array takes constant time.

3. **`unshift()`**:  
   **Complexity**: O(n)  
   **Description**: Adding an element to the beginning of the array requires shifting all elements.

4. **`shift()`**:  
   **Complexity**: O(n)  
   **Description**: Removing an element from the beginning requires shifting all elements.

5. **`concat()`**:  
   **Complexity**: O(n + m)  
   **Description**: Combining two arrays requires traversing both arrays, where `n` and `m` are the lengths of the arrays being merged.

6. **`slice()`**:  
   **Complexity**: O(k)  
   **Description**: Creating a shallow copy of a portion of the array where `k` is the size of the slice.

7. **`splice()`**:  
   **Complexity**: O(n)  
   **Description**: Modifying the array by adding or removing elements can require shifting elements.

8. **`map()`**:  
   **Complexity**: O(n)  
   **Description**: Applying a function to each element in the array requires visiting every element.

9. **`filter()`**:  
   **Complexity**: O(n)  
   **Description**: Checking each element to see if it meets the condition requires visiting every element.

10. **`reduce()`**:  
    **Complexity**: O(n)  
    **Description**: Accumulating a result from each element of the array requires visiting every element.

11. **`every()`**:  
    **Complexity**: O(n)  
    **Description**: Checking if all elements meet a condition requires visiting every element.

12. **`some()`**:  
    **Complexity**: O(n)  
    **Description**: Checking if at least one element meets a condition requires visiting every element.

13. **`find()`**:  
    **Complexity**: O(n)  
    **Description**: Finding the first element that matches a condition requires scanning through the array.

14. **`findIndex()`**:  
    **Complexity**: O(n)  
    **Description**: Finding the index of the first element that matches a condition requires scanning through the array.

15. **`forEach()`**:  
    **Complexity**: O(n)  
    **Description**: Iterating over each element in the array requires visiting every element.

16. **`sort()`**:  
    **Complexity**: O(n log n)  
    **Description**: Sorting the array uses a comparison-based algorithm (like quicksort or mergesort), which typically requires `O(n log n)` time.

17. **`reverse()`**:  
    **Complexity**: O(n)  
    **Description**: Reversing the array requires swapping all elements.

18. **`lastIndexOf()`**:  
    **Complexity**: O(n)  
    **Description**: Searching for the last occurrence of a value requires traversing the array.

19. **`fill()`**:  
    **Complexity**: O(n)  
    **Description**: Filling the entire array with a specific value requires iterating over each element.

20. **`join()`**:  
    **Complexity**: O(n)  
    **Description**: Concatenating all elements into a string requires traversing the array.

21. **`length`**:  
    **Complexity**: O(1)  
    **Description**: Retrieving the length of the array is constant time.

22. **`Array.isArray()`**:  
    **Complexity**: O(1)  
    **Description**: Checking if a value is an array is constant time.

23. **`flat()`**:  
    **Complexity**: O(n)  
    **Description**: Flattening the array requires visiting each element, where `n` is the number of elements in the array.

24. **`copyWithin()`**:  
    **Complexity**: O(n)  
    **Description**: Copying elements to another position within the array requires traversing and modifying the array.

25. **`indexOf()`**:  
    **Complexity**: O(n)  
    **Description**: Finding the index of an element requires scanning through the array.

25. **`flatMap()`**:  
    **Complexity**: O(n)  
    **Description**: Mapping each element and then flattening the result requires visiting every element.

26. **`reduceRight()`**:  
    **Complexity**: O(n)  
    **Description**: Accumulating a result from each element starting from the right side requires visiting every element.


## Conclusion
Understanding the Big O complexities of JavaScript array methods helps in selecting the right method based on performance considerations, especially when dealing with large datasets. Use these methods efficiently to ensure optimal array manipulation in your applications.

---

