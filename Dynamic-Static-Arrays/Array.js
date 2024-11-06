const UnderstandingArrays = () => {
    // Initialize an array
    let arr = [1, 2, 3, 4, 5];

    console.log('Here we have created an array : ' + arr);

    // 1. Adding elements to the end (push) - O(1)
    arr.push(6); // [1, 2, 3, 4, 5, 6]

    console.log('Here we have added a value in an array : ' + arr);

    // 2. Removing the last element (pop) - O(1)
    let poppedElement = arr.pop(); // 6, arr is now [1, 2, 3, 4, 5]

    console.log('Here we have removed the value : ' + poppedElement + ' from the array : ' + arr);

    // 3. Adding elements to the beginning (unshift) - O(n)
    arr.unshift(0); // [0, 1, 2, 3, 4, 5]

    console.log('Here we have added an element in the start of the array : ' + arr);

    // 4. Removing the first element (shift) - O(n)
    let shiftedElement = arr.shift(); // 0, arr is now [1, 2, 3, 4, 5]

    console.log('Here we have removed the first element of the array : ' + arr);

    // 5. Concatenating arrays (concat) - O(n + m) where n is the length of the original array and m is the length of the array being concatenated
    let newArr = arr.concat([6, 7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]

    console.log('Here we have concatenated an array [6,7,8] to ' + arr + ' The new Array is : ' + newArr + ' Note the orignal array is still the same : ' + arr);

    // 6. Slicing an array (slice) - O(k), where k is the number of elements selected
    let slicedArr = arr.slice(1, 4); // [2, 3, 4]

    console.log('Here we have sliced the array from the index 1 to 4 getting an array of : ' + slicedArr + ' Note the original Array is still the same : ' + arr);

    // 7. Splicing an array (splice) - O(n) where n is the number of elements to be modified (removed or added)
    let splicedArr = arr.splice(1, 2, 10, 11); // Removes 2 and 3, adds 10 and 11 at index 1
    // arr is now [1, 10, 11, 4, 5], splicedArr is [2, 3]

    console.log('Here we have spliced the array from the index 1 to 2 and adding 10 , 11 to that position. The new array is : ' + arr + ' and the spliced Array is : ' + splicedArr + " Note that the original array is changed")

    // 8. Mapping over an array (map) - O(n) where n is the number of elements in the array
    let mappedArr = arr.map(x => x * 2); // [2, 20, 22, 8, 10]

    console.log('Here we are mapping over an array making a new array the multiples of 2 of the original array, Orignal Array: ' + arr + ' , Mapped Array: ' + mappedArr)

    // 9. Filtering an array (filter) - O(n) where n is the number of elements in the array
    let filteredArr = arr.filter(x => x > 5); // [10, 11]

    console.log('Here we are filtering over an array making a new array the multiples of 2 of the original array, Orignal Array: ' + arr + ' , filtered Array: ' + filteredArr)

    // 10. Reducing an array (reduce) - O(n) where n is the number of elements in the array
    let sum = arr.reduce((acc, currentVal) => acc + currentVal, 0); // 29 (1 + 10 + 11 + 4 + 5)

    console.log('Here we are reducing the array to a single element. The reduced element : ' + sum + ' The original array is : ' + arr)

    // 11. Checking condition on all elements (every) - O(n)
    let allGreaterThanZero = arr.every(x => x > 0); // true (all elements > 0)

    console.log('Here we are using the function every to check if all elements of an array pass a condition,  the result is : ' + allGreaterThanZero + ' The original array is : ' + arr)

    // 12. Checking condition on at least one element (some) - O(n)
    let someGreaterThanZero = arr.some(x => x > 10); // true (10 > 10)

    console.log('Here we are using the function some to check if any elements of an array pass a condition,  the result is : ' + someGreaterThanZero + ' The original array is : ' + arr)

    // 13. Finding the first match (find) - O(n) where n is the number of elements in the array
    let firstMatch = arr.find(x => x === 10); // 10

    console.log('Here we are using the function find to find if the first elements of an array which pass a condition,  the result is : ' + firstMatch + ' The original array is : ' + arr)

    // 14. Finding the index of the first match (findIndex) - O(n)
    let firstIndexMatch = arr.findIndex(x => x === 10); // 1 (index of 10)

    console.log('Here we are using the function findIndex to find if the first index of the element of an array which pass a condition,  the result is : ' + firstIndexMatch + ' The original array is : ' + arr)

    // 15. ForEach - O(n) where n is the number of elements in the array
    arr.forEach(x => x + 1); // Logs each element (1, 10, 11, 4, 5)

    console.log('Here we are using the function forEach to iterate over the elements of an array. The original array is : ' + arr);

    // 16. Sorting an array (sort) - O(n log n), where n is the number of elements in the array
    let sortedArr = arr.sort((a, b) => a - b); // [1, 4, 5, 10, 11]

    console.log('Here we are using the function sort to sort an array with a condition, The original array is : ' + arr + ' The sorted array is : ' + sortedArr);

    // 17. Reversing an array (reverse) - O(n) where n is the number of elements in the array
    let reversedArr = arr.reverse(); // [11, 10, 5, 4, 1]

    console.log('Here we are using the function reverse to reverse an array, The original array is : ' + arr + ' The sorted array is : ' + reversedArr);

    // 18. Finding the last index of a value (lastIndexOf) - O(n) where n is the number of elements in the array
    let lastIndex = arr.lastIndexOf(10); // 1 (last occurrence of 10)

    console.log('Here we are using the function lastIndexOf to find the last index of a value, The original array is : ' + arr + ' The indexed value is : ' + lastIndex);

    // 19. Filling an array (fill) - O(n) where n is the number of elements in the array
    arr.fill(0); // [0, 0, 0, 0, 0]

    console.log('Here we are filling all the indexes of the array to the value provided : ' + arr);

    // 20. Joining array elements into a string (join) - O(n) where n is the number of elements in the array
    let joinedArr = arr.join('-'); // '0-0-0-0-0'

    console.log('Here we are mutating all the indexes of the array to a string : ' + joinedArr + ' the original array is : ' + arr);

    // 21. Getting the length of the array (length) - O(1)
    let length = arr.length; // 5

    console.log("Here we are getting the length of the array : " + length + ' the original array is : ' + arr)

    // 22. Checking if it's an array (Array.isArray) - O(1)
    let isArray = Array.isArray(arr); // true

    console.log("Here we are checking if the array is an array : " + isArray + ' the original array is : ' + arr)

    let nestedArr = [1, [2, 3], [4, 5]];

    console.log('Here we are creating a nested array : ' + nestedArr + ' the original array is : ' + arr);

    // 23. Flat array (flat) - O(n) where n is the total number of elements after flattening
    let flatArr = nestedArr.flat(); // [1, 2, 3, 4, 5]

    console.log('Here we are flating the array : ' + flatArr + ' the original array is : ' + arr)

    // 24. Filling array with values from another array (copyWithin) - O(n) where n is the number of elements in the array
    let arrCopy = arr.copyWithin(0, 2); // Copies elements starting from index 2 to the beginning

    console.log('Here we are copying elements from an array to another array : ' + arrCopy + ' the original array is : ' + arr)

    // 25. Finding the index of a value (indexOf) - O(n) where n is the number of elements in the array
    let index = arr.indexOf(10); // 1
    
    console.log('Here we are finding the index of a value in an array : ' + index + ' the original array is : ' + arr)

    // 26. Flat mapping an array (flatMap) - O(n) where n is the number of elements in the array
    let flatMappedArr = arr.flatMap(x => [x, x * 2]); // [1, 2, 10, 20, 11, 22, 4, 8, 5, 10]

    console.log('Here we are flat mapping an array : ' + flatMappedArr + ' the original array is :'+ arr);

    // 27. Reducing an array from right to left (reduceRight) - O(n) where n is the number of elements in the array
    let reversedSum = arr.reduceRight((acc, currentVal) => acc + currentVal, 0); // 29 (5 + 4 + 11 + 10 + 1)

    console.log('Here we are reducing the array from right to left :'+ reversedSum +'the original array is :'+ arr);

}

UnderstandingArrays();