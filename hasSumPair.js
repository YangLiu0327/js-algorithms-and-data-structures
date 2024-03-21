// find pair that sums up to k
// give an array of integers arr and an integer k
// create a boolean function that checks if there
// exists two elements in arr such that we get k 
// when we add them together

function hasSumPair(arr, k) {
    const seen = new Set();
    for (let num of arr) {
        const complement = k - num;
        if(seen.has(complement)) {
            return true;
        }
        seen.add(num)
    }
    return false
}

function sumToK(arr, k){
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if(arr[left] + arr[right] === k) {
            return [arr[left], arr[right]]
        } else if (arr[left] + arr[right] < k) {
           left++;
        } else {
           right--;
        }
    }
    return false;
}

function sumToZero(arr) {
    let left = 0;
    let right = arr.length -1;
    while(left < right) {
        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]]
        } else if (arr[left] + arr[right] < 0) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}
// console.log(sumToK([1,2,3,4,7], 3))
// console.log(sumToZero([-4, -2, 0, 1, 2]))
