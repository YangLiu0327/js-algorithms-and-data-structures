// Merge sort
// combination merging and sorting

// merging arrays
function merge(arr1,arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i<arr1.length && j<arr2.length)
    if(arr2[j] > arr1[i]) {
        result.push(arr1[i])
        i++;
    } else {
        result.push(arr2[j])
        j++;
    }
    while (i<arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while ( j<arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

// console.log(merge([3,100000], [2,14,99,100]))

// mergeSort
// slice(start, end)

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right)
}

console.log(mergeSort([3,100000,2,14,99,100, 0, -3]))
