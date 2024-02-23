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

console.log(selectionSort([34,22,10,29,0,2,13]))