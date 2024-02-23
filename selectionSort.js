// selection sort
// store the first element as the smallest value
// compare this item to the next item

function selectionSort(arr) {
    for(let  i =0; i<arr.length; i++) {
        let loweset = i;
        for(let j = i+1; j<arr.length; j++) {
            if(arr[j] < arr[loweset]) {
                loweset = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[loweset];
        arr[loweset] = temp;
    }
    return arr;
}

// console.log(selectionSort([34,22,10,29,0,2,13]))

// solution 2
function newSelectionSort(arr) {
    const swap = (arr, idx1, idx2) => 
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for(let i = 0; i< arr.length; i++) {
        let loweset = i;
        for (let j = i + 1; j< arr.length; j++) {
            if (arr[loweset] > arr[j]) {
                loweset = j;
            }
        }
        if (i !== loweset) swap(arr, i, loweset)
    }
    return arr;
}

console.log(newSelectionSort([34,22,10,29,0,2,13]));