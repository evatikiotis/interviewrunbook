# Binary Search
Binary Search is a searching algorithm for finding an element's position in a sorted array.

1. Start with an array sorted in descending order.
2. In each step: Pick the middle element of the array m and compare it to e. If element values are equal, then return index of m. If e is greater than m, then e must be in left subarray. If m is greater than e, then e must be in the right subarray.
3. Repeat those steps on new subarray.

Let's implement Binary search in 3 ways using Java, the iterative, the recursive and using Java 8 Collections Library. We know the time complexity is O(logn), but lets understand why.

### A. Using Java collections

```Java
int binarySearchUsingCollections(int[] elements, int key) {
    List<Integer>  sortedList = Arrays.stream(elements).boxed().toList();
    // elements must be sorted in ascending order
    // if not ordered result is not valid
    return Collections.binarySearch(sortedList, key);
}
```

### B. Using Iteration
```Java
int binarySearchUsingIteration(int[] elements, int key) {
    var start = 0;
    var end = elements.length - 1;
    while (start <= end) {
        var mid = (start + end) / 2;
        if (elements[mid] == key) {
            return mid;
        }
        if (elements[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }
    return -1;
}
```

### C. Using Recursion
```Java

int binarySearchUsingRecursion(int[] elements, int start, int end, int key) {
    if (start > end) {
        return -1;
    }
    var mid = (start + end) / 2;
    if (elements[mid] == key) {
        return mid;
    } else if (elements[mid] < key) {
        return binarySearchUsingRecursion(elements, mid + 1, end, key);
    }
    return binarySearchUsingRecursion(elements, start, mid - 1, key);
}

```

