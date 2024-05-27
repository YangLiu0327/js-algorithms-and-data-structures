// 0380 Insert Delete GetRandom O(1) M 
// 哈希,随机化,设计
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// 思路： combine hash map and array
// hash map => quickly check for the existence of an element an its index in array
// array => to store the elements and allow O(1) random access
var RandomizedSet = function() {
   this.map = new Map(); // {1 => 0}  { 1 => 0, 2 => 1 }
   this.list = []; // [1]  [1,2]
}

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) {
        return false;
    }
    // adding new key value pairs
    this.map.set(val, this.list.length); // store this value and index in the map 
    this.list.push(val); // store value in array
    console.log(this.map, 'init')
    console.log(this.list, 'init')
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)) {
        return false;
    }
    // [1,2,3] {1=>0, 2=>1, 3=>2}
    // key is 1, 2, 3 for map
    // get(key = val) => key(1) So here is 0
    const index = this.map.get(val);
    const lastElement = this.list[this.list.length -1];

    // swap the value with the last element
    this.list[index] = lastElement; // list[0] = 3 => [3,2,3]
    // update the map with new index of the last element
    // map.set(3, 0) 3 is key, 0 is value => {1 =>0, 2=>1, 3=>2} => {1=>0, 2=>1, 3=>0}
    this.map.set(lastElement, index);

    // remove last element from array and delete from map
    this.list.pop(); // [3,2,3] => [3,2]
    // val 1 => delete key as 1 1=>0
    this.map.delete(val); // {1=>0, 2=>1, 3=>0} => {2=>1, 3=>0}
    console.log(this.list, this.map, 'final')
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
var param_1 = obj.insert(1);
var param_2 = obj.insert(2);
var param_3 = obj.insert(3);
var param_4 = obj.getRandom();
var param_5 = obj.remove(1);
console.log(obj)
console.log(param_4, 'param_4')