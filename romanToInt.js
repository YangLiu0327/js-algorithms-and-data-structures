// roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function romanToInt(str) {
    let total = 0;
    let map = {
        'IV' : 4,
        'IX' : 9,
        'XL' : 40,
        'XC' : 90,
        'CD' : 400,
        'CM' : 900,
    }

  for (let key in map) {
    if(str.includes(key)) {
        str = str.split(key).join('')
        total+= map[key]
    }
  }

    let romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let arr = str.split('')
    for (let i =0; i<arr.length; i++) {
        let num = arr[i]
        if(romanNumerals.hasOwnProperty(num)) {
            arr[i] = romanNumerals[num]
            total += arr[i]
        }
    }
    return total;
}

console.log(romanToInt('MCMXCIV'))


// M CM XC IV

// [1000, 900, 90, 4]