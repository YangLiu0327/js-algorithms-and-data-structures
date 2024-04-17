// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
// The returned integer should be non-negative as well.

function sqrt(x) {
    if(x === 0 || x===1) {
        return x;
    }
    let left = 1;
    let right = Math.floor(x / 2);

    while(left <= right) {
        let mid = Math.floor((left+right) / 2);
        let square = mid * mid;
        if(square === x) {
            return mid;
        } else if (square < x) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return right;
}
console.log(sqrt(8)); 