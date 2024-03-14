// input:  "cat", "car", "bar"

// function setup(input)
// function isInDict(word)

// setup([ "cat", "car", "bar"])
// isInDict("cat") // true
// isInDict("*at") // true
// isInDict("test") // false

// function isInDict(str) {
//     function setup(arr) {
//         return arr;
//     }
//     const dictionary = setup(["cat", "car", "bar"])
//     if(dictionary.indexOf(str) >= 0) {
//         return true
//     } else return false
// }

class Dictionary {
    constructor(wordArr) {
        const wordMap = wordArr.reduce((acc, word) => {
            acc[word] = true;
            for (let i = 0; i < word.length; i++) {
                const start = word.slice(0, i); // ca
                const end = word.slice(i + 1);  // t
                const partialWord = `${start}*${end}`; // ca*t
                acc[partialWord] = true;
            }
            return acc;
        }, {})
        this.dict = wordMap;
    }
    isInDict(word) {
        return !!this.dict[word]
    }
}

const test = new Dictionary(["cat", "car", "bar"])
console.log(test.isInDict("cat"))
console.log(test.isInDict("*at"))
console.log(test.isInDict("ca*"))
console.log(test.isInDict("hifF"))
