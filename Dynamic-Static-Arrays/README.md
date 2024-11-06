# Understanding Arrays

**Static Arrays**
It is fixed length container containing n elements **indexable** (Each slot or index can be referenced with a number) from the range [0 , n-1]. These are contiguous chunks of memory.

**When and where is a static array used?**
- Temporary storing data.
- To store buffers.
- Can be saved as lookup tables.
- It can be used to save return values.
- It can be used to cache values.

## Complexity Table
| Complexity   | Static Array | Dynamic Array |
|--------------|--------------|---------------|
| Access       | O(1)         | O(1)          |
| Search       | O(n)         | O(n)          |
| Insertion    | N/A          | O(n)          |
| Appending    | N/A          | O(1)          |
| Deleting     | N/A          | O(n)          |
