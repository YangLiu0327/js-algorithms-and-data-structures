// what is hash table
// store key-value

// function hash(key, arrLen) {
//     let total = 0;
//     for(let char of key) {
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrLen
//     }
//     return total;
// }

function hash(key, arrLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i =0; i< Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrLen;
    }
    return total;
}
// console.log(hash("hello", 13))

// collisions

class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96
          total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
          this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    } 
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
          for(let i = 0; i < this.keyMap[index].length; i++){
            if(this.keyMap[index][i][0] === key) {
              return this.keyMap[index][i][1]
            }
          }
        }
        return undefined;
      }
      values(){
        let valuesArr = [];
        for(let i =0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for(let j =0; j<this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
      }
      keys(){
        let keysArr = [];
        for(let i =0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for(let j =0; j<this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
      }
}
let ht = new HashTable(17);

ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")

// console.log(ht.get("mediumvioletred"))
// console.log(ht.keys())

var maxProfit = function(prices) {
   if(!prices || prices.length === 0) return 0;
   let min = prices[0]
   let maxProfit = 0;
   for (let i =1; i<prices.length; i++) {
    min = Math.min(min, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - min)
   }
   return maxProfit;
};
console.log(maxProfit([7,1,5,3,6,4]))