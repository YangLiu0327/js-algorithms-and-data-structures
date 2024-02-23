// javascript sort => array.sort();

function numberCompare(num1, num2) {
    return num1 - num2;
}
// console.log([1,6,2,45,33].sort(numberCompare));


function compareByLen(str1, str2) {
    return str1.length - str2.length;
}
// console.log(["hi", "test", "hello", "algorithms", "data structures"].sort(compareByLen))

// a sorting algorithm where the largest values bubble up to the top!

// function bubbleSort(arr){
//     for(var i = arr.length; i > 0; i--){
//       for(var j = 0; j < i - 1; j++){
//         console.log(arr, arr[j], arr[j+1]);
//         if(arr[j] > arr[j+1]){
//           var temp = arr[j];
//           arr[j] = arr[j+1];
//           arr[j+1] = temp;         
//         }
//       }
//     }
//     return arr;
//   }

  // ES2015 Version
// function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
  
//     for (let i = arr.length; i > 0; i--) {
//       for (let j = 0; j < i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           swap(arr, j, j + 1);
//         }
//       }
//     }
//     return arr;
//   }


  function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i>0; i--) {
        noSwaps = true;
        for(let j = 0; j<i -1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr;
  }
bubbleSort([37,45,29,8])
