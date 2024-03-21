// give a string, create a function that returns the
// first repeating character, if such a character doesn't 
// exist, return the null character '\0'

function findFirstRepearChar(str) {
    let obj = {};
    for(let i =0; i<str.length; i++) {
        let char = str[i];
        obj[char] = (obj[char] || 0) + 1
        if(obj[char] === 2 ) {
            return char;
        }
    }
    return '\0'
}

console.log(findFirstRepearChar('shfuh'))