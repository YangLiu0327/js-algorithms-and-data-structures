// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// function isHappy(n) {
//     n = String(n)
 
//     let result = 0;
//     let arr = n.split('')
 
//     for(let i = 0; i < arr.length; i++) {
//          let newNumber = arr[i] * arr[i]
//          result += newNumber
//     }
 
//     if (result === 1) {
//         return true;
//     } else if (result === 4 || result === 16 || result === 37 || result === 58 || result === 89 || result === 145 || result === 42 || result === 20) {
//         return false;
//     } else {
//         return isHappy(result);
//     }
//  }
 

function isHappy(n) {
    let seen = new Set()
    while(n !==1 ) {
        if(seen.has(n)) {
            return false;
        }
        seen.add(n)
        let sum = 0;
        while(n > 0) {
            const digit = n % 10; // 9
            sum += digit * digit // 81
            n = Math.floor(n / 10) // 1
            console.log(n)
        }
        n = sum // 82
    }
    return true;
}

 console.log(isHappy(199));