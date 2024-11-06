# My Understanding of Data Structures
An implementation for understanding data structures


## Data Structure

A way of organizing data so it is used the most effectively.

**Why are data structures important?**

They are the basic ingredients to create algorithms. Very important to manage data. For me, they make the code cleaner. Its the data structures which makes the difference between an okay product to an awesome product.

**What is an Abstract Data Type?**

It is an absraction of a data structure which provides only the interface to which a data structure must adhere to. The interface does not provide the information on how it should be implemented. 

| Abstract Data Type       | Implementation       |
|----------------|----------------|
| List  | Dynamic Array, Linked List  |
| Queue | Linked List Queue, Array based Queue  |
| Map  | Tree map, Hash map  |



## Computational Complexity Analysis

How much time and space does an algorithm needs for computation is known as complexity analysis.

### Big-O Notation

Big-O notation gives an upper bound of the complexity of the algorithm **(keeping in mind the worst possible case)**. It helps to quantify performance as the input size becomes arbitrarily large.

| Time Complexity       | Notation      |
|-----------------------|---------------|
| Constant Time         | O(1)          |
| Logarithmic Time      | O(log(n))     |
| Linear Time           | O(n)          |
| Linearithmic Time     | O(nlog(n))    |
| Quadratic Time        | O(n^2)        |
| Cubic Time            | O(n^3)        |
| Exponential Time      | O(b^n) (where b > 1) |
| Factorial Time        | O(n!)         |

### Code Examples (Javascript)

**Constant Time: O(1)**

```
function constantTime(arr) {
  return arr[0]; // Accessing the first element
}
```

**Logarithmic Time : O(log n)**

```
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}
```

**Linear Time: O(n)**

```
function linearTime(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Iterating through the array
  }
}
```

**Linearithmic Time: O(n log n)**

```
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

**Quadratic Time: O(n^2)**

```
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

**Cubic Time: O(n^3)**

```
function cubicTime(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        // Some operation here
        console.log(i, j, k);
      }
    }
  }
}
```

**Exponential Time: O(2^n)**

```
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

**Factorial Time: O(n!)**

```
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
```


## Understanding Big-O Notation

Understanding Big-O is crucial because it allows us to evaluate the efficiency of our code, especially as our data grows. Each complexity category represents different growth rates:

- **Constant Time** `O(1)`: Shows ideal scenarios where execution time remains the same regardless of input size.
- **Logarithmic Time** `O(log n)`: Efficient for algorithms like binary search, where data is reduced by half with each step.
- **Linear Time** `O(n)`: Reflects algorithms that scale proportionally to input size, like iterating through an array.
- **Linearithmic Time** `O(n log n)`: Common in more efficient sorting algorithms, such as merge sort.
- **Quadratic** `O(n^2)` and **Cubic** `O(n^3)`: These complexities are slower, often involving nested loops, and should be used with smaller datasets.
- **Exponential** `O(2^n)` and **Factorial** `O(n!)`: Indicate extremely high growth rates, suitable only for small inputs.

By carefully analyzing these examples, you can make informed decisions about which algorithms best fit your needs, ensuring efficient and scalable code. Remember, understanding and optimizing time complexity is fundamental to writing performant applications, especially when handling large datasets.
